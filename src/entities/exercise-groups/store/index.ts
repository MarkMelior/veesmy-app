import { create } from 'zustand';

import { getExerciseGroups } from '../api';

import type { IExerciseGroupsResponse } from '../types';

interface IExerciseGroupsStore {
  dataExerciseGroup: IExerciseGroupsResponse[] | null
  errorExerciseGroup: string | null
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
    }
    catch (error) {
      set({ errorExerciseGroup: (error as Error).message });
    }
    finally {
      set({ loadingExerciseGroup: false });
    }
  },
  loadingExerciseGroup: false,
}));
