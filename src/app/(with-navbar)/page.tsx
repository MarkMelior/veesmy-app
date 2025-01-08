import { Card } from '@/widgets/Card';
import { mockExerciseListItems } from '@/widgets/Card/model/mock';
import { Headers } from '@/widgets/Headers';

import { ArrowLeftIcon, FilterOutlineIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { Badge, Button, Flex, Layout, List, Separator } from '@/shared/ui';
import { InfoBlock } from '@/shared/ui/client';

import { FiltersModal } from '@/features/FiltersModal';
import { SortModal } from '@/features/SortModal';

import styles from './page.module.scss';

const Home = () => (
  <>
    <Headers.Main />
    <main>
      <Layout>
        <InfoBlock maxHeight={126} textButton="Показать всю статистику">
          <List.Item
            description="~ конец в 18:36"
            icon={<StopwatchOutlineIcon />}
            title="Расчётное время"
            value="~ 1 час 30 минут"
          />
          <List.Horizontal
            items={[
              {
                title: 'Тренировка №',
                value: '98',
              },
              {
                title: 'Начало',
                value: '17:06',
              },
              {
                title: 'Упражнений',
                value: '7',
              },
            ]}
          />
          <List.Item
            icon={<StopwatchOutlineIcon />}
            showDivider={false}
            title="Пусто"
            value="Пусто"
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
        <Card.ExercisesList items={mockExerciseListItems} />
      </Layout>
    </main>
  </>
);

export default Home;
