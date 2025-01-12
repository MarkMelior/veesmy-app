import { create } from 'zustand';

import { getVeesActive } from '../api';

import type { IVeesResponse } from '../types';

interface IVeesActiveStore {
  dataVeesActive: IVeesResponse | null
  errorVeesActive: string | null
  loadingVeesActive: boolean
  loadVeesActive: () => Promise<void>
};

export const useVeesActive = create<IVeesActiveStore>((set) => ({
  dataVeesActive: null,
  errorVeesActive: null,
  loadingVeesActive: false,
  loadVeesActive: async () => {
    set({ errorVeesActive: null, loadingVeesActive: true });

    try {
      const dataVeesActive = await getVeesActive();

      set({ dataVeesActive });
    }
    catch (error) {
      set({ errorVeesActive: (error as Error).message });
    }
    finally {
      set({ loadingVeesActive: false });
    }
  },
}));
