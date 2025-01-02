import { Headers } from '@/widgets/Headers';
import { InfoBlock } from '@/widgets/InfoBlock';
import { mockInfoBlockVeesItems } from '@/widgets/InfoBlock/model/mock-vees';
import { VeesList } from '@/widgets/VeesList';
import { mockVeesListItems } from '@/widgets/VeesList/model/mock';

import { Layout } from '@/shared/ui';

import { Timer } from '@/features/Timer';

const Home = () => (
  <>
    <Headers.ExercisesList />
    <main>
      <Layout>
        <InfoBlock items={mockInfoBlockVeesItems} />
      </Layout>
      <Layout padding={false}>
        <VeesList items={mockVeesListItems} />
      </Layout>
    </main>
    <Timer />
  </>
);

export default Home;
