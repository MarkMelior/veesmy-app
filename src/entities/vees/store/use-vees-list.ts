import { create } from 'zustand';

import { getVeesList } from '../api';

import type { IVeesListResponse } from '../types';

interface IVeesListStore {
  dataVeesList: IVeesListResponse[] | null
  errorVeesList: string | null
  loadingVeesList: boolean
  loadVeesList: () => Promise<void>
};

export const useVeesList = create<IVeesListStore>((set) => ({
  dataVeesList: null,
  errorVeesList: null,
  loadingVeesList: false,
  loadVeesList: async () => {
    set({ errorVeesList: null, loadingVeesList: true });

    try {
      const dataVeesList = await getVeesList();

      set({ dataVeesList });
    }
    catch (error) {
      set({ errorVeesList: (error as Error).message });
    }
    finally {
      set({ loadingVeesList: false });
    }
  },
}));
