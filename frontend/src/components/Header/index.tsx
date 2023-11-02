import * as S from './styles';
import { Button } from '../Button';
import { useHeaderController } from './useHeaderController';

export default function Header() {
  const { navigateToLogin } = useHeaderController();
  return (
    <S.Container>
      <h1>Repositório de TCCs</h1>

      <S.UserContainer>
        <Button onClick={navigateToLogin}>Entrar</Button>
      </S.UserContainer>
    </S.Container>
  );
}
