import { create } from 'zustand';

import { getExerciseGroup } from '../api';

import type { IExerciseGroupResponse } from '../types';

interface IExerciseGroupStore {
  dataExerciseGroup: IExerciseGroupResponse[] | null
  errorExerciseGroup: string | null
  loadExerciseGroup: () => Promise<void>
  loadingExerciseGroup: boolean
};

export const useExerciseGroup = create<IExerciseGroupStore>((set) => ({
  dataExerciseGroup: null,
  errorExerciseGroup: null,
  loadExerciseGroup: async () => {
    set({ errorExerciseGroup: null, loadingExerciseGroup: true });

    try {
      const dataExerciseGroup = await getExerciseGroup();

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
