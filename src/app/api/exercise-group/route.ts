import { NextResponse } from 'next/server';

import type { TExerciseGroupResponse } from '@/entities/exercise-group';

export async function GET(): Promise<NextResponse> {
  const mockData: TExerciseGroupResponse[] = [
    {
      color: '#FAC938',
      exercises: [
        {
          id: '64f5d700-2ae9-4f53-8d9c-43fe90f63d32',
          name: 'Горизонтальная тяга',
        },
        {
          id: 'b8139a33-a755-4e4f-a430-8da4993c66b9',
          name: 'Подтягивания с доп. весом',
        },
        {
          id: 'b75a4e08-0fec-4edf-9fc4-6a966a20aa06',
          name: 'Тяга штанги к поясу',
        },
      ],
      id: '09d399a8-ecd7-46e9-a7ef-1498a579c331',
      name: 'Спина',
    },
    {
      color: '#FA4838',
      exercises: [
        {
          id: '147244e6-ab19-4bd2-bb2f-28e6d4145127',
          name: 'Разведения в кроссовере на одну руку',
        },
        {
          id: '0f9e9776-71d1-40d5-bf55-e9ec7e0dbdda',
          name: 'Разведение гантелей в стороны',
        },
      ],
      id: '4463b999-4b96-472c-8f15-823c41630631',
      name: 'Средние дельты',
    },
    {
      color: '#00FF80',
      exercises: [
        {
          id: '39ce3084-d7bc-471d-bdd4-c8870349dcef',
          name: 'Брусья с доп. весом',
        },
        {
          id: '77f6ecf4-9452-4f47-8fed-5c68881a19d4',
          name: 'Жим лёжа узким хватом',
        },
        {
          id: '9ae9be94-3514-487a-920f-802d2a76f804',
          name: 'Французский жим лёжа',
        },
      ],
      id: '83a54707-d2bd-4c7b-8b07-5ae0a8b1c300',
      name: 'Трицепс',
    },
    {
      color: '#1A80E5',
      exercises: [
        {
          id: '1638eeaa-164b-4e3c-ba1c-68087a4385a8',
          name: 'Жим штанги',
        },
        {
          id: 'd3dce3ed-cedf-4d1f-b907-927e24314f02',
          name: 'Жим гантелей в наклоне',
        },
        {
          id: '24233635-cbea-41bc-8669-6f07dbbc21a1',
          name: 'Жим штанги в наклоне',
        },
        {
          id: '7e040e20-61e0-4c2c-818a-192df8fc2cae',
          name: 'Брусья с доп. весом',
        },
      ],
      id: 'ebc58f8d-3191-4685-8857-8bd40c834813',
      name: 'Грудь',
    },
    {
      color: '#9B693B',
      exercises: [],
      id: 'bdc4677b-5cec-40b0-806a-d9d87c04f89b',
      name: 'Квадрицепсы',
    },
  ];

  return NextResponse.json(mockData);
}
