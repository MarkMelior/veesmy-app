export interface IResult {
  count: number
  weight: number
}

export interface IVeesDto {
  duration: {
    from: string // Начало
    to: string // Конец (добавляется при сохранении тренировки. Расчётное время будет производиться в коде)
  }
  exercises: {
    id: string
    previousId?: string // id упражнения, которое заменили (если есть замена)
    result: IResult[]
    comment?: string
  }[] // Если изменён порядок или удалено/добавлено новое упражнение, то шаблон упражнений isEdited
  exerciseTemplateId?: string // id шаблона упражнений (если нет, то название шаблона "пользовательский")
  id: string
}

export interface IVeesResponse {
  duration: {
    from: string
    to: string
  }
  exercises: {
    id: string
    previousId?: string
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
  id: string
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
  id: string
  number: number // Номер тренировки
  resultDownCount: number
  resultUpCount: number
}
