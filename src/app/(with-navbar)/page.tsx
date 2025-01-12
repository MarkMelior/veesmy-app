import { Headers } from '@/widgets/Headers';

import { ClientRender } from './client';

const Home = () => (
  <>
    <Headers.Main />
    <main>
      <ClientRender />
    </main>
  </>
);

export default Home;
