import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITags } from '../../types/Tags';
import { useErrors } from '../../hooks/useErrors';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { documentsService } from '../../services/documents';
import { useMutation } from '@tanstack/react-query';

const schema = z.object({
  title: z.string().min(3, { message: 'O título deve ter no mínimo 3 letras' }),
  keywords: z
    .array(z.string())
    .min(1, { message: 'Deve ter no mínimo 1 palavra-chave' }),
  author: z.array(z.string()).min(1, { message: 'Deve ter no mínimo 1 autor' }),
  file: z
    .any()
    .refine((file) => file !== null, {
      message: 'O arquivo é obrigatório',
    })
    .refine((file) => file?.type === 'application/pdf', {
      message: 'O arquivo deve ser do tipo PDF',
    }),
});

export function useNewDocumentController() {
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState<ITags[]>([]);
  const [authors, setAuthors] = useState<ITags[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ['documents', 'create'],
    mutationFn: async (data: FormData) => {
      return documentsService.create(data);
    },
  });

  function handleUpload(uploadedFile: File | null) {
    setFile(uploadedFile);
  }

  function reset() {
    setKeywords([]);
    setAuthors([]);
    setFile(null);
    if (titleRef.current) {
      titleRef.current.value = '';
    }
  }
  async function handleSubmit() {
    if (!titleRef.current) return;
    const formData: { [key: string]: string | string[] | File | null } = {
      title: titleRef.current.value,
      keywords: keywords.map((keyword) => keyword.value),
      author: authors.map((author) => author.value),
      file: file,
    };

    try {
      schema.parse(formData);

      const isFormValid = errors.length === 0;
      if (!isFormValid) {
        toast.error('O formulário contém erros');
        return;
      }
      const form = new FormData();

      for (const key in formData) {
        if (Array.isArray(formData[key])) {
          form.append(key, JSON.stringify(formData[key]));
        } else {
          form.append(key, formData[key] as string);
        }
      }

      await mutateAsync(form);
      toast.success('Documento criado com sucesso');
      reset();
    } catch (error) {
      const fieldErrors: { [key: string]: string } = {};
      if (error instanceof z.ZodError) {
        console.log(error);
        // Extrai erros de cada campo gerado pelo Zod
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
      }
      // Adiciona erros
      Object.keys(fieldErrors).forEach((field) => {
        setError({ field, message: fieldErrors[field] });
      });
      // Lida com os erros já resolvidos
      errors.forEach((currentError) => {
        if (!fieldErrors[currentError.field]) {
          removeError(currentError.field);
        }
      });
    }
  }

  return {
    navigate,
    keywords,
    setKeywords,
    authors,
    setAuthors,
    file,
    handleUpload,
    titleRef,
    handleSubmit,
    getErrorMessageByFieldName,
    isPending,
  };
}
