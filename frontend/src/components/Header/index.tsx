import * as S from './styles';
import { Button } from '../Button';
import { useHeaderController } from './useHeaderController';
import UserCard from '../UserCard';
import { RowsIcon } from '@radix-ui/react-icons';

interface HeaderProps {
  onSidebarToggle: () => void;
}

export default function Header({ onSidebarToggle }: HeaderProps) {
  const { navigateToLogin, user, signedIn } = useHeaderController();
  return (
    <S.Container>
      <S.MobileContainer>
        <RowsIcon onClick={onSidebarToggle} />
      </S.MobileContainer>
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
