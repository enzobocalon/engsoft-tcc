import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { authService } from '../../services/auth';
import { SigninParams } from '../../services/auth/signin';
import { useAuth } from '../../hooks/useAuth';

const schema = z.object({
  name: z.string().min(1, {
    message: 'Nome não pode ser vazio.',
  }),
  password: z.string().min(8, {
    message: 'Senha deve ter no mínimo 8 caracteres',
  }),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { signin } = useAuth();

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ['signin'],
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
    } catch {
      toast.error('Verifique suas credenciais e tente novamente.');
    }
  });

  return {
    handleSubmit,
    register,
    errors,
    isPending,
  };
}
