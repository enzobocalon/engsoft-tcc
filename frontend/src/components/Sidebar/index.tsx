import * as S from './styles';
import logo from '../../assets/images/logo-branca-2.png';
import Search from '../Search';
import { AnimatePresence } from 'framer-motion';
import { Cross2Icon } from '@radix-ui/react-icons';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <S.DesktopMobileContainer>
          <S.Container>
            <S.ImageContainer>
              <img src={logo} />
            </S.ImageContainer>
            <Search />
          </S.Container>
          <S.CrossIconContainer onClick={onToggle}>
            <Cross2Icon />
          </S.CrossIconContainer>
        </S.DesktopMobileContainer>
      )}
    </AnimatePresence>
  );
}
