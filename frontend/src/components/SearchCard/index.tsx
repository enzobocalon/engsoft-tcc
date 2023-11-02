import * as S from './styles';

export default function SearchCard() {
  return (
    <S.Container>
      <h2>Titulo</h2>
      <p>Autores</p>
      <S.Info style={{ marginBlock: '10px' }}>
        <p>Palavras Chaves:</p>
        <span>Palavra 1, Palavra 2</span>
      </S.Info>
    </S.Container>
  );
}
