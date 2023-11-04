import * as S from './styles';
import { Button } from '../Button';
import { useHeaderController } from './useHeaderController';
import UserCard from '../UserCard';

export default function Header() {
  const { navigateToLogin, user, signedIn } = useHeaderController();
  return (
    <S.Container>
      <h1>Repositório de TCCs</h1>

      <S.UserContainer>
        {!user && !signedIn ? (
          <Button onClick={navigateToLogin}>Entrar</Button>
        ) : (
          <UserCard />
        )}
      </S.UserContainer>
    </S.Container>
  );
}
