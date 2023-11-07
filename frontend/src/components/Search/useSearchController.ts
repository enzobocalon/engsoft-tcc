import { useCallback, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { documentsService } from '../../services/documents';
import { useQuery } from '@tanstack/react-query';

export function useSearchController() {
  const [currentOption, setCurrentOption] = useState(0);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef<HTMLInputElement | null>(null);

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== 'Enter') return;
    setSearchTerm(searchRef.current?.value || '');
  }

  function getURLQuery() {
    switch (currentOption) {
      case 0:
        return 'keywords';
      case 1:
        return 'author';
      default:
        return 'keywords';
    }
  }

  function handlePage(event: { selected: number }) {
    setPage(Math.ceil(event.selected + 1));
  }

  const handleOption = useCallback((option: number) => {
    setCurrentOption(option);
  }, []);

  const { data, isError, isLoading } = useQuery({
    queryKey: ['documents', searchTerm, page],
    staleTime: 1000 * 60 * 30,
    queryFn: () =>
      documentsService.getByFilters(getURLQuery(), searchTerm, page),
    enabled: !!searchTerm,
  });

  useEffect(() => {
    if (isError) {
      toast.error('Erro ao buscar documentos');
    }
  }, [isError]);

  return {
    currentOption,
    setCurrentOption,
    handleOption,
    data,
    handleSearch,
    searchRef,
    isLoading,
    handlePage,
  };
}
