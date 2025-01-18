import { create } from 'zustand';

import type { IErrorResponse } from '@/shared/lib/handle-error';
import { handleError } from '@/shared/lib/handle-error';
import type { IVeesResponse } from '@/shared/types';

import { getVeesById } from '../api';

interface IVeesStore {
  dataVees: IVeesResponse | null
  errorVees: IErrorResponse | null
  loadingVees: boolean
  onGetVeesById: (id: string) => Promise<void>
};

export const useVees = create<IVeesStore>((set) => ({
  dataVees: null,
  errorVees: null,
  loadingVees: true,
  onGetVeesById: async (id) => {
    set({ errorVees: null, loadingVees: true });

    try {
      const dataVees = await getVeesById(id);

      set({ dataVees });
    } catch (error) {
      set({ errorVees: handleError({ error }) });
    } finally {
      set({ loadingVees: false });
    }
  },
}));
