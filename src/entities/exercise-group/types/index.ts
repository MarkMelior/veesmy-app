// Группы упражнений (мышц)

// * AddExerciseModal - страница `/vees`
// GET exercise-group/get-list - Получение списка всех групп и упражнений
export type IExerciseGroupDto = {
  color: string // Цвет группы
  exercises: {
    id: string // id упражнения
    name: string // Название упражнения
  }[]
  id: string // id группы
  name: string // Название группы
};

export interface IExerciseGroupResponse {
  color: string // Цвет группы
  exercises: {
    id: string // id упражнения
    name: string // Название упражнения
  }[]
  id: string // id группы
  name: string // Название группы
};
