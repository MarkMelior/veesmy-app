import { create } from 'zustand';

import type { IErrorResponse } from '@/shared/lib/handle-error';
import { handleError } from '@/shared/lib/handle-error';
import type { IVeesListResponse } from '@/shared/types';

import { getVeesList } from '../api';

interface IVeesListStore {
  dataVeesList: IVeesListResponse[] | null
  errorVeesList: IErrorResponse | null
  loadingVeesList: boolean
  loadVeesList: () => Promise<void>
};

export const useVeesList = create<IVeesListStore>((set) => ({
  dataVeesList: null,
  errorVeesList: null,
  loadingVeesList: true,
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
