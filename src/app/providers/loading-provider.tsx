'use client';

import { useEffect } from 'react';

import { useLoading } from '@/entities/loading';
import { useVeesActive } from '@/entities/vees-active';

interface IInitialProvider {
  children: React.ReactNode
}

export const LoadingProvider = ({ children }: IInitialProvider) => {
  const { setLoading } = useLoading();
  const { loadingGlobal } = useVeesActive();

  useEffect(() => {
    setLoading(false);

    if (loadingGlobal) {
      setLoading(true);
    }
  }, [loadingGlobal]);

  return children;
};
