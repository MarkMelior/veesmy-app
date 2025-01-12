import { create } from 'zustand';

import { getStats } from '../api';

import type { IStatsResponse } from '../types';

interface IStatsStore {
  dataStats: IStatsResponse | null
  errorStats: string | null
  loadingStats: boolean
  loadStats: () => Promise<void>
};

export const useStats = create<IStatsStore>((set) => ({
  dataStats: null,
  errorStats: null,
  loadingStats: false,
  loadStats: async () => {
    set({ errorStats: null, loadingStats: true });

    try {
      const dataStats = await getStats();

      set({ dataStats });
    }
    catch (error) {
      set({ errorStats: (error as Error).message });
    }
    finally {
      set({ loadingStats: false });
    }
  },
}));
