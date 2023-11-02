import Header from '../../components/Header';
import PDFContent from '../../components/PDFContent';
import Sidebar from '../../components/Sidebar';
import * as S from './styles';

export default function IndexPage() {
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <Header />
        <PDFContent />
      </S.Content>
    </S.Container>
  );
}
