import { create } from 'zustand';

import { DEFAULT_ERROR } from '@/shared/constants';
import { getRandomSupportPhrase } from '@/shared/lib/get-random-support-phrase';
import type { IErrorResponse } from '@/shared/lib/handle-error';
import { handleError } from '@/shared/lib/handle-error';
import { filterUndefined } from '@/shared/lib/object';
import { openMessage } from '@/shared/lib/open-message';
import type { IVeesDto, IVeesResponse } from '@/shared/types';

import { useVeesList } from '@/entities/vees-list'; // ! FIXME

import { addExerciseToActive, getVeesActive } from '../api';
import { removeVeesActive } from '../api/remove-vees-active';
import { saveVeesActive } from '../api/save-vees-active';

interface IVeesActiveStore {
  completeWithoutSave: () => void
  completeWithSave: () => void
  dataVeesActive: IVeesResponse | null
  errorVeesActive: IErrorResponse | null
  loadingGlobal: boolean
  loadingVeesActive: boolean
  loadVeesActive: () => Promise<void>
  onAddExerciseToActive: (id: string) => void
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
      return openMessage(DEFAULT_ERROR);
    }

    const payload: Omit<IVeesDto, 'id'> = {
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
      useVeesList.getState().loadVeesList(); // ! FIXME
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
  loadingGlobal: false,
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
  onAddExerciseToActive: async (id: string) => {
    set({ loadingGlobal: true });

    try {
      const exercise = await addExerciseToActive(id);
      const dataVeesActive = get().dataVeesActive;

      if (!dataVeesActive || !exercise) {
        return openMessage(DEFAULT_ERROR);
      }

      openMessage({
        content: 'Успешно добавлено!',
        description: `${exercise.name}`,
      });

      set({
        dataVeesActive: {
          ...dataVeesActive,
          exercises: [...dataVeesActive.exercises, exercise],
        },
      });
    } catch (error) {
      handleError({ error });
    } finally {
      set({ loadingGlobal: false });
    }
  },
}));
