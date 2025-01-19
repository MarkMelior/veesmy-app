import type { IResult } from '@/shared/types';

export interface IExerciseById {
  groupColor: string
  groupName: string
  id: string
  name: string
  previousResult?: IResult[]
  result: []
}
