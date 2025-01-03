import { Headers } from '@/widgets/Headers';
import { InfoBlock } from '@/widgets/InfoBlock/client';
import { mockInfoBlockVeesItems } from '@/widgets/InfoBlock/model/mock-vees';
import { VeesList } from '@/widgets/VeesList/client';
import { mockVeesListItems } from '@/widgets/VeesList/model/mock';

import { Layout } from '@/shared/ui';

import { Timer } from '@/features/Timer/client';

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
