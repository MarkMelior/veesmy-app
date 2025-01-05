import { Button, Header } from '@/shared/ui';

export const Settings = () => (
  <Header
    placement="start"
    rightActions={(
      <Button iconOnly={true}>
        ^
      </Button>
    )}
    showLogo={true}
    title="Настройки"
  />
);
