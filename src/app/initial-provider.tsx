'use client';

import { useEffect } from 'react';

import { useTimer } from '@/features/Timer/client';

import { useVeesActive } from '@/entities/vees-active';

interface IInitialProvider {
  children: React.ReactNode
}

export const InitialProvider = ({ children }: IInitialProvider) => {
  const { loadVeesActive } = useVeesActive();
  const { initializeAudio, resetTimer } = useTimer();

  useEffect(() => {
    loadVeesActive();
  }, []);

  useEffect(() => {
    initializeAudio();

    return () => resetTimer();
  }, []);

  return children;
};
