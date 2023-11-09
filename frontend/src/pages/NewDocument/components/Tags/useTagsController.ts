import { useEffect, useRef, useState } from 'react';
import { ITags } from '../../../../types/Tags';
import toast from 'react-hot-toast';
import { documentsService } from '../../../../services/documents';
import { useClickOutside } from '../../../../hooks/useClickOutside';

interface UseTagsControllerParams {
  tags: ITags[];
  setTags: React.Dispatch<React.SetStateAction<ITags[]>>;
  useAutoComplete: boolean;
}

const KEY_ARROW_DOWN = 'ArrowDown';
const KEY_ARROW_UP = 'ArrowUp';
const KEY_ESCAPE = 'Escape';
const KEY_COMMA = ',';
const KEY_ENTER = 'Enter';
const KEY_BACKSPACE = 'Backspace';

export default function useTagsController({
  tags,
  setTags,
  useAutoComplete,
}: UseTagsControllerParams) {
  const [input, setInput] = useState<string>('');
  const [keywords, setKeywords] = useState<ITags[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<number>(-1);
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

  function handleCloseKeywords() {
    setKeywords([]);
    setSelectedKeyword(-1);
  }

  const clickedOutside = useClickOutside<HTMLInputElement>(handleCloseKeywords);

  function handleSelectKeyword(keywordIndex: number) {
    for (const tag of tags) {
      if (
        tag.name.toLowerCase() === keywords[keywordIndex].name.toLowerCase()
      ) {
        handleCloseKeywords();
        setInput('');
        return;
      }
    }
    setTags((prev) => [...prev, keywords[keywordIndex]]);
    handleCloseKeywords();
    setInput('');
  }
  function handleKeydown(e: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = e;
    const trimmedInput = input.trim();
    const isTagExists = () => tags.some((tag) => tag.name === trimmedInput);

    switch (key) {
      case KEY_ARROW_DOWN:
        e.preventDefault();
        setSelectedKeyword((prev) =>
          prev === null || prev === keywords.length - 1 ? 0 : prev + 1
        );
        break;

      case KEY_ARROW_UP:
        e.preventDefault();
        setSelectedKeyword((prev) =>
          prev === null || prev === 0 ? keywords.length - 1 : prev - 1
        );
        break;

      case KEY_ESCAPE:
        e.preventDefault();
        setSelectedKeyword(-1);
        setKeywords([]);
        break;

      case KEY_COMMA:
      case KEY_ENTER:
        e.preventDefault();
        if (trimmedInput.length && !isTagExists()) {
          if (useAutoComplete && selectedKeyword !== -1) {
            handleSelectKeyword(selectedKeyword);
            return;
          }

          const id = '_internal' + crypto.randomUUID(); // Lida com "key" do react quando não existe do banco
          const currentTag = {
            id,
            name: trimmedInput,
          };

          setTags((prev) => [...prev, currentTag]);
          handleCloseKeywords();
          setInput('');
        }
        break;

      case KEY_BACKSPACE:
        if (!input.length && tags.length && isKeyReleased.current) {
          e.preventDefault();
          const lastTag = tags[tags.length - 1];
          handleDelete(lastTag.id);
          setInput(lastTag.name);
        }
        isKeyReleased.current = false;
        break;

      default:
        break;
    }
  }

  async function getKeywords() {
    if (!useAutoComplete) return;
    try {
      if (!input.length) {
        setKeywords([]);
        return;
      }
      const data = await documentsService.getKeywords(input);
      setKeywords(data);
    } catch {
      toast.error('Falha ao obter as palavras-chaves.');
    }
  }

  useEffect(() => {
    if (!useAutoComplete) return;
    const debounceFn = setTimeout(() => {
      getKeywords();
    }, 1000);

    return () => clearTimeout(debounceFn);
  }, [input]);

  return {
    tags,
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
  };
}
