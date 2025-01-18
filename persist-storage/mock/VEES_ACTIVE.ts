import type { IVeesDto } from '@/shared/types';

export const VEES_ACTIVE: Omit<IVeesDto, 'id'> = {
  duration: {
    from: '2025-01-12T10:00:00',
    to: '2025-01-12T11:00:00',
  },
  exercises: [
    {
      comment: 'Добавить больше подходов в следующий раз',
      id: 'b75a4e08-0fec-4edf-9fc4-6a966a20aa06',
      result: [{ count: 10, weight: 20 }],
    },
    {
      comment: 'Сменить угол скамьи',
      id: 'd3dce3ed-cedf-4d1f-b907-927e24314f02',
      result: [{ count: 12, weight: 25 }],
    },
    {
      comment: 'Отлично справился',
      id: '9ae9be94-3514-487a-920f-802d2a76f804',
      result: [{ count: 15, weight: 15 }],
    },
  ],
  exerciseTemplateId: 'template-tuesday',
};
