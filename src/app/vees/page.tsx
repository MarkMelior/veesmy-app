import { Card } from '@/widgets/Card';
import { mockVeesListItems } from '@/widgets/Card/model/mock';
import { Headers } from '@/widgets/Headers';

import { PaperOutlineIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { Chip, Layout, List, Separator } from '@/shared/ui';
import { InfoBlock } from '@/shared/ui/client';

import { Timer } from '@/features/Timer/client';

const Vees = () => (
  <>
    <Headers.ExercisesList />
    <main>
      <Layout>
        <InfoBlock>
          <List.Item
            description="~ конец в 18:36"
            icon={<StopwatchOutlineIcon />}
            title="Расчётное время"
            value="~ 1 час 30 минут"
          />
          <List.Item
            icon={<PaperOutlineIcon />}
            title="Тренировка"
            value={(
              <Chip.Category
                className="mt-1"
                color="text-red-500"
                isEdited={true}
                name="Вторник"
                number={9}
                size="medium"
              />
            )}
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
            showDivider={false}
          />
        </InfoBlock>
      </Layout>
      <Separator size={32} />
      <Layout padding={false}>
        <Card.VeesList items={mockVeesListItems} />
      </Layout>
    </main>
    <Timer />
  </>
);

export default Vees;
