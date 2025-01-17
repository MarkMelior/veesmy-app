import { create } from 'zustand';

import type { IErrorResponse } from '@/shared/lib/handle-error';
import { handleError } from '@/shared/lib/handle-error';

import { getVeesList } from '../api';

import type { IVeesListResponse } from '../types';

interface IVeesListStore {
  dataVeesList: IVeesListResponse[] | null
  errorVeesList: IErrorResponse | null
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
    } catch (error) {
      set({ errorVeesList: handleError({ error }) });
    } finally {
      set({ loadingVeesList: false });
    }
  },
}));
