'use client';

import { useEffect } from 'react';

import { InfoIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { getDateDifference } from '@/shared/lib/date';
import { Alert, List, Skeleton } from '@/shared/ui';
import { InfoBlock } from '@/shared/ui/client';

import { useStats } from '@/entities/stats';

export const Statistics = () => {
  const { dataStats, errorStats, loadingStats, loadStats } = useStats();

  useEffect(() => {
    loadStats();
  }, []);

  if (loadingStats) {
    return <Skeleton height={190} />;
  }

  if (errorStats) {
    return (
      <Alert
        closable={false}
        content="Ошибка загрузки статистики!"
        description={errorStats.message}
        type="error"
      />
    );
  }

  if (!dataStats) {
    return (
      <InfoBlock maxHeight={126} textButton="Показать всю статистику">
        <List.Item
          icon={<InfoIcon height={14} width={14} />}
          title="Пример статистики"
          value="Здесь будет вся ваша статистика, например:"
        />
        <List.Horizontal
          items={[
            { title: 'Тренировок', value: '98' },
            { title: 'Подходов', value: '1787' },
            { title: 'Стаж', value: '1 год' },
          ]}
        />
        <List.Horizontal
          items={[
            { title: 'Прогресс в упражнениях', value: '3758' },
            { title: 'Регресс в упражнениях', value: '2869' },
          ]}
          showDivider={false}
        />
      </InfoBlock>
    );
  }

  const {
    approachCount,
    betterCount,
    dateFirstVees,
    veesCount,
    worseCount,
  } = dataStats;

  // Логика расчета стажа
  const dateFirst = new Date(dateFirstVees);
  const nowDate = new Date();

  const { days, months, years } = getDateDifference(dateFirst, nowDate);

  const experience = years
    ? `${years} г.` : months
      ? `${months} мес.` : `${days} д.`;

  return (
    <InfoBlock maxHeight={126} textButton="Показать всю статистику">
      <List.Item
        icon={<StopwatchOutlineIcon />}
        title="Вы тренировались"
        value="148 часов 56 минут"
      />
      <List.Horizontal
        items={[
          { title: 'Тренировок', value: veesCount },
          { title: 'Подходов', value: approachCount },
          { title: 'Стаж', value: experience },
        ]}
      />
      <List.Horizontal
        items={[
          { title: 'Прогресс в упражнениях', value: betterCount },
          { title: 'Регресс в упражнениях', value: worseCount },
        ]}
        showDivider={false}
      />
    </InfoBlock>
  );
};
