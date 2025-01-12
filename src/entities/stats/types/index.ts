// Статистика

// GET stats
export interface IStatsResponse {
  approachCount: number // Кол-во подходов
  betterCount: number // Кол-во прогресса
  dateFirstVees: string // Дата первой тренировки
  exercisesAvg: number // Среднее количество упражнений
  exercisesCount: number // Кол-во упражнений
  exercisesMax: number // Максимальное количество упражнений
  exercisesMin: number // Минимальное количество упражнений
  exercisesSum: number // Сумма количества упражнений
  veesCount: number // Кол-во тренировок
  veesDurationAvg: number // Среднее время тренировки
  veesDurationMax: number // Максимальное время тренировки
  veesDurationMin: number // Минимальное время тренировки
  veesDurationSum: number // Сумма времени тренировок
  worseCount: number // Кол-во регресса
}
