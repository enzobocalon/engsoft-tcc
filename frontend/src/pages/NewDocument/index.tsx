import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
import * as S from './styles';
import UserCard from '../../components/UserCard';
import { useNewDocumentController } from './useNewDocumentController';
import { Input } from '../../components/Input';
import Tags from './components/Tags';
import { Button } from '../../components/Button';
import Uploader from './components/Uploader';
import { Error } from '../../components/Error';

export default function NewDocument() {
  const {
    navigate,
    keywords,
    authors,
    setAuthors,
    setKeywords,
    file,
    handleUpload,
    titleRef,
    handleSubmit,
    getErrorMessageByFieldName,
  } = useNewDocumentController();
  return (
    <S.Container>
      <S.Header>
        <S.ReturnContainer onClick={() => navigate('/')}>
          <DoubleArrowLeftIcon />
          Voltar a página inicial
        </S.ReturnContainer>
        <h1>Adicionar Documentos</h1>
        <UserCard hideNew />
      </S.Header>

      <S.Body>
        <S.Form onSubmit={(e) => e.preventDefault()}>
          <S.FormField>
            <label>Título do Documento</label>
            <Input
              ref={titleRef}
              placeholder="Insira o título do documento..."
            />
            <Error message={getErrorMessageByFieldName('title')} />
          </S.FormField>
          <S.FormField>
            <label>Temas</label>
            <Tags
              description="Separe os temas apertando enter ou vírgula."
              tags={keywords}
              setTags={setKeywords}
              placeholder="Ex: Segurança, Informação."
            />
            <Error message={getErrorMessageByFieldName('keywords')} />
          </S.FormField>
          <S.FormField>
            <label>Autores</label>
            <Tags
              description="Separe os autores apertando enter ou vírgula. Insira o nome completo em uma única tag."
              tags={authors}
              setTags={setAuthors}
              placeholder="Ex: João Paulo da Silva, Maria de Souza..."
            />
            <Error message={getErrorMessageByFieldName('authors')} />
          </S.FormField>
          <S.FormField>
            <label>Arquivo</label>
            <Uploader
              file={file}
              onUpload={handleUpload}
              error={getErrorMessageByFieldName('file')}
            />
          </S.FormField>
          <Button onClick={handleSubmit}>Enviar</Button>
        </S.Form>
      </S.Body>
    </S.Container>
  );
}
