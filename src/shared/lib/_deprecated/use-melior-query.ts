import { useCallback, useEffect, useState } from 'react';

import { handleError } from '../handle-error';

interface IUseMeliorQuery<T> {
  method: () => Promise<T>
  showError?: boolean
}

interface IUseMeliorQueryResult<T> {
  data: T | null
  error: string | null
  isError: boolean
  isFetching: boolean
  isSuccess: boolean
  isUninitialized: boolean
  loading: boolean
  refetch: () => void
}

export const useMeliorQuery = <T>({
  method,
  showError = true,
}: IUseMeliorQuery<T>): IUseMeliorQueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUninitialized, setIsUninitialized] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const refetch = useCallback(async () => {
    try {
      setIsFetching(true);
      setIsUninitialized(false);
      setLoading(true);
      setIsSuccess(false);
      setIsError(false);

      const response = await method();

      setData(response);
      setIsSuccess(true);
      setLoading(false);
    } catch (error) {
      const { message } = handleError({ error, isMessage: showError });

      setError(message);
      setIsError(true);
      setLoading(false);
    } finally {
      setIsFetching(false);
    }
  }, [method]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    data,
    error,
    isError,
    isFetching,
    isSuccess,
    isUninitialized,
    loading,
    refetch,
  };
};
