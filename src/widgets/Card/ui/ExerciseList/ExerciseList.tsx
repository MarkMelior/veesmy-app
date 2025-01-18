import type { IErrorResponse } from '@/shared/lib/handle-error';
import type { IVeesListResponse } from '@/shared/types';
import { Alert, Empty, Flex, Skeleton } from '@/shared/ui';

import { ExerciseItem } from '../ExerciseItem/ExerciseItem';

interface IExerciseList {
  error: IErrorResponse | null
  items: IVeesListResponse[] | null
  loading: boolean
}

export const ExerciseList = ({ error, items, loading }: IExerciseList) => {
  if (loading) {
    return <Skeleton.List />;
  }

  if (error) {
    return (
      <Alert
        closable={false}
        content="Ошибка загрузки списка тренировок!"
        description={error.message}
        type="error"
      />
    );
  }

  if (!items) {
    return (
      <Empty
        description="Перейдите в «Настройки» → «Загрузить mock-данные»"
        title="Приложение на стадии разработки..."
      />
    );
  }

  return (
    <Flex gap={22} vertical={true}>
      {items.map((item, index) => (
        <ExerciseItem item={item} key={`${index}${item.number}`} />
      ))}
    </Flex>
  );
};
