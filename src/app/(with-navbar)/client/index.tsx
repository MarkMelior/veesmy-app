'use client';

import { useEffect } from 'react';

import { Card } from '@/widgets/Card';

import { ArrowLeftIcon, FilterOutlineIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { getDateDifference } from '@/shared/lib/date';
import { Badge, Button, Flex, Layout, List, Separator } from '@/shared/ui';
import { InfoBlock } from '@/shared/ui/client';

import { FiltersModal } from '@/features/FiltersModal';
import { SortModal } from '@/features/SortModal';

import { useStats } from '@/entities/stats';
import { useVeesActive, useVeesList } from '@/entities/vees';

import styles from '../page.module.scss';

export const ClientRender = () => {
  const { dataVeesList, loadVeesList } = useVeesList();
  const { dataStats, loadStats } = useStats();
  const { dataVeesActive } = useVeesActive();

  useEffect(() => {
    loadVeesList();
  }, []);

  useEffect(() => {
    loadStats();
  }, [dataVeesActive]);

  if (!dataStats || !dataVeesList) {
    return;
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
  // * --- * //

  return (
    <>
      <Layout>
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
        <Separator size={18} />
        <Flex gap={10} id="home-filters-buttons">
          <FiltersModal>
            <Button
              className={styles.button}
              full={true}
              iconRight={(
                <Badge show={true}>
                  <FilterOutlineIcon />
                </Badge>
              )}
              size="large"
            >
              Фильтры
            </Button>
          </FiltersModal>
          <SortModal>
            <Button
              className={styles.button}
              full={true}
              iconRight={(
                <Badge show={false}>
                  <ArrowLeftIcon className="rotate-90" />
                </Badge>
              )}
              size="large"
            >
              Сортировка
            </Button>
          </SortModal>
        </Flex>
      </Layout>
      <Separator size={32} />
      <Layout padding={false}>
        <Card.ExercisesList items={dataVeesList} />
      </Layout>
    </>
  );
};
