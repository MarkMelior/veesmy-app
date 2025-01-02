import { Button, Header } from '@/shared/ui';

export const AllVees = () => (
  <Header
    placement="start"
    rightActions={(
      <Button iconOnly={true}>
        ^
      </Button>
    )}
    title="Все тренировки"
  />
);
