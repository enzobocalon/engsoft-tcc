import { useRef } from 'react';

interface UseUploaderControllerParams {
  onUpload: (e: File | null) => void;
}

export function useUploaderController({
  onUpload,
}: UseUploaderControllerParams) {
  const uploaderRef = useRef<HTMLInputElement | null>(null);

  function resetRef() {
    if (uploaderRef.current) {
      uploaderRef.current.value = '';
    }
  }

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      onUpload(e.target.files[0]);
    }

    resetRef();
  }

  function handleRemoveFile() {
    onUpload(null);
    resetRef();
  }
  return {
    uploaderRef,
    handleUpload,
    onUpload,
    handleRemoveFile,
  };
}
