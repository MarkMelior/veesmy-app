import { NextResponse } from 'next/server';

import type { IStatsResponse } from '@/entities/stats';

export async function GET(): Promise<NextResponse> {
  const mockData: IStatsResponse = {
    approachCount: 21,
    betterCount: 3,
    dateFirstVees: '2024-11-12T17:06:00',
    exercisesAvg: 6,
    exercisesCount: 6,
    exercisesMax: 7,
    exercisesMin: 5,
    exercisesSum: 42,
    veesCount: 1,
    veesDurationAvg: 1,
    veesDurationMax: 2,
    veesDurationMin: 1,
    veesDurationSum: 2,
    worseCount: 1,
  };

  return NextResponse.json(mockData);
}
