import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import * as S from './styles';

export default function IndexPage() {
  return (
    <S.Container>
      <Sidebar />
      <Header />
    </S.Container>
  );
}
