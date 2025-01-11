import { NextResponse } from 'next/server';

import type { IVeesListResponse } from '@/entities/vees';

export async function GET(): Promise<NextResponse> {
  const mockData: IVeesListResponse[] = [
    {
      approachCount: 21,
      commentCount: 1,
      duration: {
        from: '2024-11-12T17:06:00',
        to: '2024-11-12T19:04:00',
      },
      exerciseCount: 6,
      exerciseTemplate: {
        color: '#FA4838',
        id: 'd1b01141-e32f-445e-a758-ed5282734f34',
        isEdited: true,
        name: 'Вторник',
        number: 8,
      },
      number: 1,
      resultDownCount: 1,
      resultUpCount: 3,
    },
  ];

  return NextResponse.json(mockData);
}
