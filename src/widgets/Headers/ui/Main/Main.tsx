import { Button, Header } from '@/shared/ui';

export const Main = () => (
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
