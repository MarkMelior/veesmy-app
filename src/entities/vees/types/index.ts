// Активная тренировка
// Список всех тренировок

import type { IResult } from '@/shared/types';

export interface IVeesDto {
  duration: {
    from: string // Начало
    to: string // Конец (добавляется при сохранении тренировки. Расчётное время будет производиться в коде)
  }
  exercises: {
    id: string
    previousId?: string
    result: IResult[]
    comment?: string
  }[] // Если изменён порядок или удалено/добавлено новое упражнение, то шаблон упражнений isEdited
  exerciseTemplateId?: string // id шаблона упражнений (если нет, то название шаблона "пользовательский")
}

export interface IVeesResponse {
  duration: {
    from: string
    to: string
  }
  exercises: {
    id: string
    previousResult?: IResult[]
    result: IResult[]
    comment?: string
    groupColor: string
    groupName: string
    name: string
    previousName?: string
  }[]
  exerciseTemplate?: {
    id: string
    name: string
    color: string
    number: number
  }
  number: number // Номер тренировки
}

export interface IVeesListResponse {
  approachCount: number
  commentCount: number
  duration: {
    from: string
    to: string
  }
  exerciseCount: number
  exerciseTemplate?: {
    id: string
    name: string
    color: string
    number: number
    isEdited?: boolean
  }
  number: number // Номер тренировки
  resultDownCount: number
  resultUpCount: number
}
