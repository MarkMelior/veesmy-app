import { Headers } from '@/widgets/Headers';
import { InfoBlock } from '@/widgets/InfoBlock/client';
import { mockInfoBlockExercisesItems } from '@/widgets/InfoBlock/model/mock-exercises';

import { ArrowLeftIcon, FilterOutlineIcon } from '@/shared/icons';
import { Badge, Button, Flex, Layout, Separator } from '@/shared/ui';

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
          <Button
            className={styles.button}
            full={true}
            iconRight={(
              <Badge>
                <FilterOutlineIcon />
              </Badge>
            )}
            size="large"
          >
            Фильтры
          </Button>
          <Button
            className={styles.button}
            full={true}
            iconRight={(
              <Badge>
                <ArrowLeftIcon className="rotate-90" />
              </Badge>
            )}
            size="large"
          >
            Сортировка
          </Button>
        </Flex>
      </Layout>
    </main>
  </>
);

export default Home;
