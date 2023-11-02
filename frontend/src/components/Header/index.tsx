import * as S from './styles';
import { Button } from '../Button';

export default function Header() {
  return (
    <S.Container>
      <h1>Repositório de TCCs</h1>

      <S.UserContainer>
        <Button>Entrar</Button>
      </S.UserContainer>
    </S.Container>
  );
}
