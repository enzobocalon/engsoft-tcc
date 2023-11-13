import { AnimatePresence } from 'framer-motion';
import * as S from './styles';
import logo from '../../assets/images/logo-branca-2.png';
import Spinner from '../Spinner';

interface LaunchScreenProps {
  isLoading: boolean;
}

export default function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <S.Container
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, type: 'fade' }}
        >
          <img src={logo} />
          <Spinner stroke={'white'} />
          <span>Carregando a aplicação...</span>
        </S.Container>
      )}
    </AnimatePresence>
  );
}
