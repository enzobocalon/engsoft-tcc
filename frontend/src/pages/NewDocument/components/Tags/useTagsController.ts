import { useRef, useState } from 'react';
import { ITags } from '../../../../types/Tags';

interface UseTagsControllerParams {
  tags: ITags[];
  setTags: React.Dispatch<React.SetStateAction<ITags[]>>;
}

export default function useTagsController({
  tags,
  setTags,
}: UseTagsControllerParams) {
  const [input, setInput] = useState<string>('');
  const isKeyReleased = useRef(true);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleKeyUp() {
    isKeyReleased.current = true;
  }

  function handleDelete(tagId: string) {
    setTags((prev) => prev.filter((tag) => tag.id !== tagId));
  }

  function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = e;
    const trimmedInput = input.trim();

    if (
      (key === ',' || key === 'Enter') &&
      trimmedInput.length &&
      !tags.some((tag) => tag.value === trimmedInput)
    ) {
      e.preventDefault();
      const id = crypto.randomUUID();
      const currentTag = {
        id,
        value: trimmedInput,
      };
      setTags((prev) => [...prev, currentTag]);
      setInput('');
    }

    if (
      key === 'Backspace' &&
      !input.length &&
      tags.length &&
      isKeyReleased.current
    ) {
      e.preventDefault();
      const lastTag = tags[tags.length - 1];
      handleDelete(lastTag.id);
      setInput(lastTag.value);
    }

    isKeyReleased.current = false;
  }

  return {
    tags,
    input,
    handleChange,
    handleKeydown,
    handleDelete,
    handleKeyUp,
  };
}
