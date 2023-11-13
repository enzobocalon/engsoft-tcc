import { useDocument } from '../../hooks/useDocument';

export function usePDFContentController() {
  const { document } = useDocument();

  function formatPath() {
    if (!document) return;
    if (import.meta.env.VITE_BUCKET_URL) {
      return document.path;
    }
    return import.meta.env.VITE_API_URL + '/public/documents/' + document.path;
  }

  return {
    document,
    formatPath,
  };
}
