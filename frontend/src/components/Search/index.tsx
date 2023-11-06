import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Input } from '../Input';
import * as S from './styles';
import Select from '../Select';
import SearchCard from '../SearchCard';
import { useSearchController } from './useSearchController';

export default function Search() {
  const { data, handleSearch, currentOption, handleOption, searchRef } =
    useSearchController();
  return (
    <S.Container>
      <S.SearchInputContainer>
        <Select selection={currentOption} onSelect={handleOption} />
        <S.InputContainer>
          <MagnifyingGlassIcon />
          <Input
            ref={searchRef}
            onKeyDown={handleSearch}
            placeholder="Pesquisar por temas. Ex: segurança, informação"
          />
        </S.InputContainer>
      </S.SearchInputContainer>

      <S.SearchGroup>
        <p>Resultados</p>
        {data ? (
          data.documents.length > 0 ? (
            data.documents.map((item) => (
              <SearchCard key={item.id} data={item} />
            ))
          ) : (
            <div className="errorsContainer">
              <S.Errors>
                Não foi encontrado nenhum resultado para sua busca.
              </S.Errors>
            </div>
          )
        ) : (
          <div className="errorsContainer">
            <S.Errors>Os resultados da busca serão mostrados aqui...</S.Errors>
          </div>
        )}
      </S.SearchGroup>
    </S.Container>
  );
}
