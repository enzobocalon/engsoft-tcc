import Header from '../../components/Header';
import PDFContent from '../../components/PDFContent';
import Sidebar from '../../components/Sidebar';
import * as S from './styles';
import { useIndexController } from './useIndexController';

export default function IndexPage() {
  const { handleSidebar, isSidebarOpen } = useIndexController();
  return (
    <S.Container>
      <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebar} />
      <S.Content>
        <Header onSidebarToggle={handleSidebar} />
        <PDFContent />
      </S.Content>
    </S.Container>
  );
}
