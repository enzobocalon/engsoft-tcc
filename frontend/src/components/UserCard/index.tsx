import { ExitIcon, PlusIcon } from '@radix-ui/react-icons';
import * as S from './styles';
import { useCardController } from './useCardController';
import { Button } from '../Button';

export default function UserCard() {
  const { user, signout, navigateToNewFile } = useCardController();
  return (
    <S.Container>
      <span>
        Olá, <strong>{user?.name}</strong>
      </span>
      <Button onClick={navigateToNewFile} title="Adicionar documentos">
        <PlusIcon />
      </Button>
      <Button onClick={signout}>
        <ExitIcon />
      </Button>
    </S.Container>
  );
}
