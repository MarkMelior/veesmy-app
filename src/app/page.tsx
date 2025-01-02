import { Headers } from '@/widgets/Headers';
import { InfoBlock } from '@/widgets/InfoBlock';
import { mockInfoBlockExercisesItems } from '@/widgets/InfoBlock/model/mock-exercises';
import { Navbar } from '@/widgets/Navbar';

import { Layout } from '@/shared/ui';

const Home = () => (
  <>
    <Headers.AllVees />
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
