import * as S from './styles';
import logo from '../../assets/images/logo-branca-2.png';
import Search from '../Search';

export default function Sidebar() {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={logo} />
      </S.ImageContainer>
      <Search />
    </S.Container>
  );
}
