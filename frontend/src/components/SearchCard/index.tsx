import { IDocument } from '../../types/Document';
import * as S from './styles';
import { useSearchCardController } from './useSearchCardController';

interface SearchCardProps {
  data: IDocument;
}

export default function SearchCard({ data }: SearchCardProps) {
  const { formatKeywords, handleClick } = useSearchCardController(data);
  return (
    <S.Container onClick={handleClick}>
      <h3>{data.title}</h3>
      <S.Authors>
        {data.author.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </S.Authors>
      <S.Info style={{ marginBlock: '10px' }}>
        <p>Palavras Chaves:</p>
        <span>{formatKeywords()}</span>
      </S.Info>
    </S.Container>
  );
}
