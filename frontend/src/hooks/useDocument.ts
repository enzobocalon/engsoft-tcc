import { useContext } from 'react';
import { DocumentContext } from '../context/DocumentContext';

export function useDocument() {
  return useContext(DocumentContext);
}
