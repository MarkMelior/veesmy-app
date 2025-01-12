import type { IVeesDto } from '@/entities/vees';

export const VEES_LIST: IVeesDto[] = [
  {
    duration: {
      from: '2025-01-10T10:00:00',
      to: '2025-01-10T11:00:00',
    },
    exercises: [
      {
        id: '147244e6-ab19-4bd2-bb2f-28e6d4145127', // Разведения в кроссовере на одну руку
        result: [
          { count: 20, weight: 10 },
          { count: 10, weight: 20 },
        ],
      },
      {
        id: '9ae9be94-3514-487a-920f-802d2a76f804', // Французский жим лёжа
        result: [{ count: 12, weight: 10 }],
      },
    ],
    exerciseTemplateId: 'template-tuesday',
  },
  {
    duration: {
      from: '2025-01-10T15:00:00',
      to: '2025-01-10T16:34:00',
    },
    exercises: [
      {
        id: '147244e6-ab19-4bd2-bb2f-28e6d4145127', // Разведения в кроссовере на одну руку
        result: [
          { count: 10, weight: 20 },
          { count: 20, weight: 10 },
        ],
      },
      {
        id: '9ae9be94-3514-487a-920f-802d2a76f804', // Французский жим лёжа
        result: [{ count: 10, weight: 10 }],
      },
    ],
    exerciseTemplateId: 'template-tuesday',
  },
  {
    duration: {
      from: '2025-01-08T10:00:00',
      to: '2025-01-08T11:00:00',
    },
    exercises: [
      {
        id: '24233635-cbea-41bc-8669-6f07dbbc21a1', // Жим штанги в наклоне
        result: [{ count: 10, weight: 50 }],
      },
      {
        id: 'b8139a33-a755-4e4f-a430-8da4993c66b9', // Подтягивания с доп. весом
        result: [{ count: 8, weight: 10 }],
      },
    ],
    exerciseTemplateId: 'template-saturday',
  },
  {
    duration: {
      from: '2025-01-05T10:00:00',
      to: '2025-01-05T11:00:00',
    },
    exercises: [
      {
        id: '7e040e20-61e0-4c2c-818a-192df8fc2cae', // Брусья с доп. весом
        result: [{ count: 12, weight: 15 }],
      },
      {
        id: '0f9e9776-71d1-40d5-bf55-e9ec7e0dbdda', // Разведение гантелей в стороны
        result: [{ count: 10, weight: 5 }],
      },
    ],
    exerciseTemplateId: 'template-saturday',
  },
  {
    duration: {
      from: '2025-01-03T09:00:00',
      to: '2025-01-03T10:00:00',
    },
    exercises: [
      {
        id: '39ce3084-d7bc-471d-bdd4-c8870349dcef', // Брусья с доп. весом
        result: [{ count: 10, weight: 10 }],
      },
      {
        id: 'd3dce3ed-cedf-4d1f-b907-927e24314f02', // Жим гантелей в наклоне
        result: [{ count: 8, weight: 25 }],
      },
    ],
    exerciseTemplateId: 'template-tuesday',
  },
  {
    duration: {
      from: '2025-01-01T08:30:00',
      to: '2025-01-01T09:30:00',
    },
    exercises: [
      {
        id: 'b75a4e08-0fec-4edf-9fc4-6a966a20aa06', // Тяга штанги к поясу
        result: [{ count: 10, weight: 40 }],
      },
      {
        id: '1638eeaa-164b-4e3c-ba1c-68087a4385a8', // Жим штанги
        result: [{ count: 12, weight: 60 }],
      },
    ],
    exerciseTemplateId: 'template-saturday',
  },
];
