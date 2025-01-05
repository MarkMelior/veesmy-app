import { Headers } from '@/widgets/Headers';
import { InfoBlock } from '@/widgets/InfoBlock/client';
import { mockInfoBlockExercisesItems } from '@/widgets/InfoBlock/model/mock-exercises';
import { Navbar } from '@/widgets/Navbar/client';

import { Layout } from '@/shared/ui';

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
      </Layout>
    </main>
    <Navbar />
  </>
);

export default Home;
