import { useState } from 'react';
import * as S from './styles';
import { AnimatePresence } from 'framer-motion';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }

  const ref = useClickOutside<HTMLDivElement>(handleToggle);

  return (
    <S.Container onClick={handleToggle}>
      <label>Palavras-Chave</label>

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
            <S.Options>Palavras-Chave</S.Options>
            <S.Options>Autores</S.Options>
          </S.OptionsContainer>
        )}
      </AnimatePresence>
    </S.Container>
  );
}
