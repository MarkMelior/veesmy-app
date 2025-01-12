import { NextResponse } from 'next/server';

import type { IVeesResponse } from '@/entities/vees';

export async function GET(): Promise<NextResponse> {
  const mockData: IVeesResponse = {
    duration: {
      from: '2024-11-12T17:06:00',
      to: '2024-11-12T19:04:00',
    },
    exercises: [
      {
        comment: 'Это некая заметка к упражнению на будущее, а может просто по приколу. Я не знаю',
        groupColor: '#FAC938',
        groupName: 'Спина',
        id: 'b8139a33-a755-4e4f-a430-8da4993c66b9',
        name: 'Подтягивания с доп. весом',
        previousName: 'Жим гантелей',
        previousResult: [{ count: 1, weight: 2 }],
        result: [{ count: 1, weight: 1 }, { count: 1, weight: 1 }],
      },
    ],
    exerciseTemplate: {
      color: '#FA4838',
      id: 'd1b01141-e32f-445e-a758-ed5282734f34',
      name: 'Вторник',
      number: 8,
    },
    number: 1,
  };

  return NextResponse.json(mockData);
}
