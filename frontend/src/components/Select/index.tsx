import * as S from './styles';
import { AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useSelectController } from './useSelectController';

interface SelectProps {
  selection: number;
  onSelect: (selection: number) => void;
}

export default function Select({ selection, onSelect }: SelectProps) {
  const { isOpen, handleSelection, selectedOption, handleToggle, ref } =
    useSelectController(selection, onSelect);

  return (
    <S.Container onClick={handleToggle}>
      <label>
        {selectedOption}
        <ChevronDownIcon />
      </label>

      <AnimatePresence>
        {isOpen && (
          <S.OptionsContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, type: 'fade' }}
            onClick={(e) => e.stopPropagation()}
            ref={ref}
          >
            <S.Options onClick={() => handleSelection(0)}>
              Palavras-Chave
            </S.Options>
            <S.Options onClick={() => handleSelection(1)}>Autores</S.Options>
          </S.OptionsContainer>
        )}
      </AnimatePresence>
    </S.Container>
  );
}
