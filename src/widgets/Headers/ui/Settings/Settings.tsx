import { Avatar, Button, Header, Text } from '@/shared/ui';

export const Settings = () => (
  <Header
    placement="start"
    rightActions={(
      <Button
        className="gap-2"
        color="base"
        disabled={true}
        iconRight={<Avatar />}
        variant="none"
      >
        <Text color="text-base-600" size="text-sm">Войти</Text>
      </Button>
    )}
    showLogo={true}
    title="Настройки"
  />
);
