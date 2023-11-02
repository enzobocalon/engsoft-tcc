import { LockClosedIcon, PersonIcon } from '@radix-ui/react-icons';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import logo from '../../assets/images/logo-branca-2.png';
import * as S from './styles';

export default function Login() {
  return (
    <S.Container>
      <img src={logo} />
      <S.Form>
        <label>Nome de usuário</label>
        <div>
          <LockClosedIcon />
          <Input placeholder="Seu usuário..." />
        </div>
        <label>Senha</label>
        <div>
          <PersonIcon />
          <Input placeholder="Sua senha..." />
        </div>

        <Button>Entrar</Button>
      </S.Form>
    </S.Container>
  );
}
