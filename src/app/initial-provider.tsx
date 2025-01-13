'use client';

import { useEffect } from 'react';

import { useVeesActive } from '@/entities/vees';

import { initialMockLocalforage } from '@/persist-storage/mock/initial-mock';

interface IInitialProvider {
  children: React.ReactNode
}

export const InitialProvider = ({ children }: IInitialProvider) => {
  const { loadVeesActive } = useVeesActive();

  useEffect(() => {
    initialMockLocalforage(); // ! REMOVE IT AFTER TESTING
    loadVeesActive();
  }, []);

  return children;
};
