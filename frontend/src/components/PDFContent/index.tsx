import * as S from './styles';
import { usePDFContentController } from './usePDFContentController';

export default function PDFContent() {
  const { document, formatPath } = usePDFContentController();
  return (
    <S.Container>
      {document ? (
        <>
          <h2>{document.title}</h2>

          <p>
            {document?.author?.map((item) => <p key={item.id}>{item.name}</p>)}
          </p>
          <iframe src={formatPath()} />
        </>
      ) : (
        <div>
          <p>Os documentos selecionados serão mostrados aqui</p>
        </div>
      )}
    </S.Container>
  );
}
