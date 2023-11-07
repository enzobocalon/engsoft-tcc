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
}

export default function Tags({
  tags,
  setTags,
  description,
  placeholder,
  id,
}: TagsProps) {
  const { input, handleChange, handleKeydown, handleDelete, handleKeyUp } =
    useTagsController({
      tags,
      setTags,
    });
  return (
    <S.Container>
      <small>{description}</small>
      <S.Wrapper>
        {tags.map((tag) => (
          <S.Tag key={tag.id} onClick={() => handleDelete(tag.id)}>
            <span>{tag.value}</span>
            <Cross2Icon />
          </S.Tag>
        ))}
        <Input
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeydown}
          onKeyUp={handleKeyUp}
          placeholder={placeholder}
          id={id}
        />
      </S.Wrapper>
    </S.Container>
  );
}
