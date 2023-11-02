import * as S from './styles';

export default function PDFContent() {
  return (
    <S.Container>
      <h2>Titulo</h2>

      <p>Autores</p>
      <iframe src="http://localhost:3000/public/documents/1698865485911%20-%20Monografia.pdf" />
    </S.Container>
  );
}
