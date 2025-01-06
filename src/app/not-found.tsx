import { AppRoutes } from '@/shared/constants';
import { ArrowLeftIcon } from '@/shared/icons';
import { Button, Flex, Text } from '@/shared/ui';

import styles from './not-found.module.scss';

const NotFound = () => (
  <Flex
    align="center"
    className={styles.wrapper}
    full={true}
    gap={48}
    justify="center"
    vertical={true}
  >
    <Flex align="center" vertical={true}>
      <Text size={3} weight="font-bold">404</Text>
      <Text align="text-center" as="h1" size="text-lg">Такой страницы не существует</Text>
    </Flex>
    <Button
      icon={<ArrowLeftIcon />}
      size="large"
      to={AppRoutes.MAIN}
      variant="solid"
    >
      Вернуться на главную
    </Button>
  </Flex>
);

export default NotFound;
