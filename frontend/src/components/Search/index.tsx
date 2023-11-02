import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Input } from '../Input';
import * as S from './styles';
import Select from '../Select';
import SearchCard from '../SearchCard';

export default function Search() {
  return (
    <S.Container>
      <S.SearchInputContainer>
        <Select />
        <S.InputContainer>
          <MagnifyingGlassIcon />
          <Input placeholder="Pesquisar por temas. Ex: segurança, informação" />
        </S.InputContainer>
      </S.SearchInputContainer>

      <S.SearchGroup>
        <p>Resultados</p>
        <SearchCard />
      </S.SearchGroup>
    </S.Container>
  );
}
