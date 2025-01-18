import { create } from 'zustand';

import type { IErrorResponse } from '@/shared/lib/handle-error';
import { handleError } from '@/shared/lib/handle-error';

import { getExerciseGroups } from '../api';

import type { IExerciseGroupsResponse } from '../types';

interface IExerciseGroupsStore {
  dataExerciseGroup: IExerciseGroupsResponse[] | null
  errorExerciseGroup: IErrorResponse | null
  loadExerciseGroup: () => Promise<void>
  loadingExerciseGroup: boolean
};

export const useExerciseGroups = create<IExerciseGroupsStore>((set) => ({
  dataExerciseGroup: null,
  errorExerciseGroup: null,
  loadExerciseGroup: async () => {
    set({ errorExerciseGroup: null, loadingExerciseGroup: true });

    try {
      const dataExerciseGroup = await getExerciseGroups();

      set({ dataExerciseGroup });
    } catch (error) {
      set({ errorExerciseGroup: handleError({ error }) });
    } finally {
      set({ loadingExerciseGroup: false });
    }
  },
  loadingExerciseGroup: true,
}));
