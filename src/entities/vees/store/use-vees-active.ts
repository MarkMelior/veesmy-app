import { create } from 'zustand';

import { filterUndefined } from '@/shared/lib/object';

import { getVeesActive } from '../api';
import { useVeesList } from './use-vees-list';
import { removeVeesActive } from '../api/remove-vees-active';
import { saveVeesActive } from '../api/save-vees-active';

import type { IVeesDto, IVeesResponse } from '../types';

interface IVeesActiveStore {
  completeWithoutSave: () => void
  completeWithSave: () => void
  dataVeesActive: IVeesResponse | null
  errorVeesActive: string | null
  loadingVeesActive: boolean
  loadVeesActive: () => Promise<void>
};

export const useVeesActive = create<IVeesActiveStore>((set, get) => ({
  completeWithoutSave: async () => {
    try {
      await removeVeesActive();
      set({ dataVeesActive: null });
    }
    catch (error) {
      set({ errorVeesActive: (error as Error).message });
    }
  },
  completeWithSave: async () => {
    const dataVeesActive = get().dataVeesActive;

    if (!dataVeesActive) {
      return;
    }

    const payload: IVeesDto = {
      duration: {
        from: dataVeesActive.duration.from,
        to: new Date().toISOString().split('.')[0],
      },
      exercises: dataVeesActive.exercises.map((exercise) =>
        filterUndefined({
          comment: exercise.comment,
          id: exercise.id,
          previousId: exercise.previousId,
          result: exercise.result,
        })),
      exerciseTemplateId: dataVeesActive.exerciseTemplate?.id,
    };

    try {
      await saveVeesActive(payload);
      useVeesList.getState().loadVeesList();
      set({ dataVeesActive: null });
    }
    catch (error) {
      set({ errorVeesActive: (error as Error).message });
    }
  },
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
