// Активная тренировка
// Список всех тренировок

interface IResult {
  count: number
  weight: number
}

export interface IVeesPayload {
  duration: {
    from: string // Начало
    to: string // Конец (добавляется при сохранении тренировки. Расчётное время будет производиться в коде)
  }
  exercises: {
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
  }
  number: number // Номер тренировки
}
