'use client';

import { useEffect } from 'react';

import { Card } from '@/widgets/Card';
import { Statistics } from '@/widgets/Statistics';

import { ArrowLeftIcon, FilterOutlineIcon } from '@/shared/icons';
import { Badge, Button, Flex, Layout, Separator } from '@/shared/ui';

import { FiltersModal } from '@/features/FiltersModal';
import { SortModal } from '@/features/SortModal';

import { useVeesList } from '@/entities/vees';

import styles from '../page.module.scss';

export const ClientRender = () => {
  const { dataVeesList, errorVeesList, loadingVeesList, loadVeesList } = useVeesList();

  useEffect(() => {
    loadVeesList();
  }, []);

  return (
    <>
      <Layout>
        <Statistics />
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
        <Card.ExercisesList
          error={errorVeesList}
          items={dataVeesList}
          loading={loadingVeesList}
        />
      </Layout>
    </>
  );
};
