import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITags } from '../../types/Tags';
import { useErrors } from '../../hooks/useErrors';
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(3, { message: 'O título deve ter no mínimo 3 letras' }),
  keywords: z
    .array(z.string())
    .min(1, { message: 'Deve ter no mínimo 1 palavra-chave' }),
  authors: z
    .array(z.string())
    .min(1, { message: 'Deve ter no mínimo 1 autor' }),
  file: z.instanceof(File),
});

export function useNewDocumentController() {
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState<ITags[]>([]);
  const [authors, setAuthors] = useState<ITags[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  function handleUpload(uploadedFile: File | null) {
    setFile(uploadedFile);
  }

  async function handleSubmit() {
    if (!titleRef.current) return;
    const formData = {
      title: titleRef.current.value,
      keywords: keywords.map((keyword) => keyword.value),
      authors: authors.map((author) => author.value),
    };

    try {
      if (!file) {
        setError({ field: 'file', message: 'O arquivo é obrigatório' });
      } else if (file.type !== 'application/pdf') {
        setError({
          field: 'file',
          message: 'O arquivo deve ser do tipo PDF',
        });
      } else {
        removeError('file');
      }

      schema.parse(formData);

      const isFormValid = errors.length === 0;
      // Add service call
    } catch (error) {
      const fieldErrors: { [key: string]: string } = {};
      if (error instanceof z.ZodError) {
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
  };
}
