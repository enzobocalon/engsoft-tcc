import { LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Error } from '../../components/Error';
import logo from '../../assets/images/logo-branca-2.png';
import * as S from './styles';
import { useLoginController } from './useLoginController';

export default function Login() {
  const { errors, handleSubmit, register, isPending } = useLoginController();
  return (
    <S.Container>
      <img src={logo} />
      <S.Form>
        <label>Nome de usuário</label>
        <S.DataContainer>
          <PersonIcon />
          <Input {...register('name')} placeholder="Seu usuário..." />
        </S.DataContainer>
        {errors.name && <Error message={errors.name.message} />}
        <label>Senha</label>
        <S.DataContainer>
          <LockClosedIcon />
          <Input
            {...register('password')}
            type="password"
            placeholder="Sua senha..."
          />
        </S.DataContainer>
        {errors.password && <Error message={errors.password.message} />}
        <Button type="submit" onClick={handleSubmit} loading={isPending}>
          Entrar
        </Button>
      </S.Form>
    </S.Container>
  );
}
