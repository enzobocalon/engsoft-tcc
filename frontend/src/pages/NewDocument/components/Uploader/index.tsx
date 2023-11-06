import {
  CrossCircledIcon,
  FileIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons';
import * as S from './styles';
import { useUploaderController } from './useUploaderController';
import { Error } from '../../../../components/Error';

interface UploaderProps {
  file: File | null;
  onUpload: (e: File | null) => void;
  error: string | undefined;
}

export default function Uploader({ file, error, onUpload }: UploaderProps) {
  const { uploaderRef, handleUpload, handleRemoveFile } = useUploaderController(
    {
      onUpload,
    }
  );
  return (
    <>
      <S.Container>
        {file ? (
          <S.UploadedContainer>
            <S.UploadedItem>
              <div>
                <FileIcon />
                <strong>{file.name}</strong>
              </div>
              <CrossCircledIcon onClick={handleRemoveFile} />
            </S.UploadedItem>
          </S.UploadedContainer>
        ) : (
          <S.EmptyUpload onClick={() => uploaderRef.current?.click()}>
            <PlusCircledIcon />
            <strong>Adicionar arquivo</strong>
            <small>
              Apenas arquivos .pdf são aceitos. Máximo de 1 arquivo por upload.
            </small>
          </S.EmptyUpload>
        )}
        <input
          type="file"
          ref={uploaderRef}
          className="upload"
          onChange={handleUpload}
        />
      </S.Container>
      <S.ErrorContainer>
        <Error message={error} />
      </S.ErrorContainer>
    </>
  );
}
