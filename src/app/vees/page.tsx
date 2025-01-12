import { Headers } from '@/widgets/Headers';

import { Timer } from '@/features/Timer/client';

import { ClientRender } from './client';

const Vees = () => (
  <>
    <Headers.ExercisesList />
    <main>
      <ClientRender />
    </main>
    <Timer />
  </>
);

export default Vees;
