import { useDocument } from '../../hooks/useDocument';
import { IDocument } from '../../types/Document';

export function useSearchCardController(data: IDocument) {
  const { setDocument } = useDocument();
  function formatKeywords() {
    if (!data) return;
    const transformedKeywords = data.keywords.map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
    return transformedKeywords.join(', ');
  }

  function handleClick() {
    setDocument(data);
  }

  return {
    handleClick,
    formatKeywords,
  };
}
