import { create } from 'zustand';

import { getRandomSupportPhrase } from '@/shared/lib/get-random-support-phrase';
import type { IErrorResponse } from '@/shared/lib/handle-error';
import { handleError } from '@/shared/lib/handle-error';
import { filterUndefined } from '@/shared/lib/object';
import { openMessage } from '@/shared/lib/open-message';

import { getVeesActive } from '../api';
import { useVeesList } from './use-vees-list';
import { removeVeesActive } from '../api/remove-vees-active';
import { saveVeesActive } from '../api/save-vees-active';

import type { IVeesDto, IVeesResponse } from '../types';

interface IVeesActiveStore {
  completeWithoutSave: () => void
  completeWithSave: () => void
  dataVeesActive: IVeesResponse | null
  errorVeesActive: IErrorResponse | null
  loadingVeesActive: boolean
  loadVeesActive: () => Promise<void>
};

export const useVeesActive = create<IVeesActiveStore>((set, get) => ({
  completeWithoutSave: async () => {
    set({ errorVeesActive: null, loadingVeesActive: true });

    try {
      await removeVeesActive();
      set({ dataVeesActive: null });
    } catch (error) {
      set({ errorVeesActive: handleError({ error }) });
    } finally {
      set({ loadingVeesActive: false });
    }
  },
  completeWithSave: async () => {
    set({ errorVeesActive: null, loadingVeesActive: true });

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
      ...filterUndefined({ exerciseTemplateId: dataVeesActive.exerciseTemplate?.id }),
    };

    try {
      await saveVeesActive(payload);
      useVeesList.getState().loadVeesList();
      set({ dataVeesActive: null });

      openMessage({
        content: 'Тренировка успешно сохранена!',
        description: getRandomSupportPhrase(),
      });
    } catch (error) {
      set({ errorVeesActive: handleError({ error }) });
    } finally {
      set({ loadingVeesActive: false });
    }
  },
  dataVeesActive: null,
  errorVeesActive: null,
  loadingVeesActive: true,
  loadVeesActive: async () => {
    set({ errorVeesActive: null, loadingVeesActive: true });

    try {
      const dataVeesActive = await getVeesActive();

      set({ dataVeesActive });
    } catch (error) {
      set({ errorVeesActive: handleError({ error }) });
    } finally {
      set({ loadingVeesActive: false });
    }
  },
}));
