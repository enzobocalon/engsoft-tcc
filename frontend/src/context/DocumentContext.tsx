import { ReactNode, createContext, useState } from 'react';
import { IDocument } from '../types/Document';

interface DocumentContextValue {
  document: IDocument | null;
  setDocument: React.Dispatch<React.SetStateAction<IDocument | null>>;
}

export const DocumentContext = createContext({} as DocumentContextValue);

export function DocumentProvider({ children }: { children: ReactNode }) {
  const [document, setDocument] = useState<IDocument | null>(null);

  return (
    <DocumentContext.Provider
      value={{
        document,
        setDocument,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}
