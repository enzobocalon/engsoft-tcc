import { useCallback, useState } from 'react';

interface Errors {
  field: string;
  message: string;
}

export function useErrors() {
  const [errors, setErrors] = useState<Errors[]>([]);

  const setError = useCallback(
    ({ field, message }: Errors) => {
      const errorAlreadyExists = errors.find((error) => error.field === field);

      if (errorAlreadyExists) return;

      setErrors((prev) => [...prev, { field, message }]);
    },
    [errors]
  );

  const removeError = useCallback((fieldName: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    );
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldname: string) =>
      errors.find((error) => error.field === fieldname)?.message,
    [errors]
  );

  const clearAllErrors = useCallback(() => {
    setErrors([]);
  }, []);

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
    clearAllErrors,
  };
}
