import { Cross2Icon } from '@radix-ui/react-icons';
import { Input } from '../../../../components/Input';
import * as S from './styles';
import useTagsController from './useTagsController';
import { ITags } from '../../../../types/Tags';

interface TagsProps {
  description: string;
  tags: ITags[];
  setTags: React.Dispatch<React.SetStateAction<ITags[]>>;
  placeholder: string;
  id: string;
  useAutoComplete?: boolean;
}

export default function Tags({
  tags,
  setTags,
  description,
  placeholder,
  id,
  useAutoComplete = false,
}: TagsProps) {
  const {
    input,
    handleChange,
    handleKeydown,
    handleDelete,
    handleKeyUp,
    keywords,
    handleSelectKeyword,
    selectedKeyword,
    clickedOutside,
    getKeywords,
  } = useTagsController({
    tags,
    setTags,
    useAutoComplete,
  });
  return (
    <S.Container ref={clickedOutside}>
      <small>{description}</small>
      <S.Wrapper>
        {tags.map((tag) => (
          <S.Tag key={tag.id} onClick={() => handleDelete(tag.id)}>
            <span>{tag.name}</span>
            <Cross2Icon />
          </S.Tag>
        ))}
        <Input
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          onKeyUp={handleKeyUp}
          placeholder={placeholder}
          autoComplete="off"
          id={id}
          onFocus={() => getKeywords()}
        />

        {useAutoComplete && keywords.length > 0 && (
          <S.FoundKeywords>
            {keywords.map((kw, index) => (
              <S.Tag
                key={kw.id}
                onClick={() => handleSelectKeyword(index)}
                highlight={selectedKeyword === index ? 1 : 0}
              >
                {kw.name}
              </S.Tag>
            ))}
          </S.FoundKeywords>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
