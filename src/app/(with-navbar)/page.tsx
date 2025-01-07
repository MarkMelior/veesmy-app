import { Headers } from '@/widgets/Headers';
import { InfoBlock } from '@/widgets/InfoBlock/client';
import { mockInfoBlockExercisesItems } from '@/widgets/InfoBlock/model/mock-exercises';

import { ArrowLeftIcon, FilterOutlineIcon } from '@/shared/icons';
import { Badge, Button, Flex, Layout, Separator } from '@/shared/ui';

import { FiltersModal } from '@/features/FiltersModal';
import { SortModal } from '@/features/SortModal';

import styles from './page.module.scss';

const Home = () => (
  <>
    <Headers.Main />
    <main>
      <Layout>
        <InfoBlock
          items={mockInfoBlockExercisesItems}
          showAllCountItems={2}
          showAllText="Показать всю статистику"
        />
        <Separator size={18} />
        <Flex gap={10}>

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
    </main>
  </>
);

export default Home;
