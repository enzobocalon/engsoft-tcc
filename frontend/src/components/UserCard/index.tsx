import { PlusIcon } from '@radix-ui/react-icons';
import * as S from './styles';
import { useCardController } from './useCardController';
import { Button } from '../Button';

export default function UserCard() {
  const { user, navigateToNewFile } = useCardController();
  return (
    <S.Container>
      <span>
        Olá, <strong>{user?.name}</strong>
      </span>
      <Button onClick={navigateToNewFile} title="Adicionar documentos">
        <PlusIcon />
      </Button>
    </S.Container>
  );
}
