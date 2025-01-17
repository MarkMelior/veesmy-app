'use client';

import { useEffect } from 'react';

import { useVeesActive } from '@/entities/vees';

interface IInitialProvider {
  children: React.ReactNode
}

export const InitialProvider = ({ children }: IInitialProvider) => {
  const { loadVeesActive } = useVeesActive();

  useEffect(() => {
    loadVeesActive();
  }, []);

  return children;
};
