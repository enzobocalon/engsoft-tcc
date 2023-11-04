import { useMemo, useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

export function useSelectController(
  selection: number,
  onSelect: (selection: number) => void
) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  const ref = useClickOutside<HTMLDivElement>(handleToggle);

  const selectedOption = useMemo(() => {
    switch (selection) {
      case 0:
        return 'Palavras-Chaves';
      case 1:
        return 'Autores';
    }
  }, [selection]);

  function handleSelection(option: number) {
    handleToggle();
    onSelect(option);
  }

  return {
    isOpen,
    handleToggle,
    handleSelection,
    ref,
    selectedOption,
  };
}
