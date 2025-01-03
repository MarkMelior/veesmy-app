import { AddOutlineIcon, ArrowLeftIcon, FinishOutlineIcon } from '@/shared/icons';
import { Button, Flex, Header, Modal, Text } from '@/shared/ui';

export const ExercisesList = () => (
  <Header
    leftActions={(
      <>
        <Button iconOnly={true} to="/">
          <ArrowLeftIcon />
        </Button>
        <Button iconOnly={true}>
          <FinishOutlineIcon />
        </Button>
      </>
    )}
    rightActions={(
      <Modal
        button={(
          <Button iconOnly={true}>
            <AddOutlineIcon />
          </Button>
        )}
      >
        <Flex align="center" gap={56} vertical={true}>
          <Text
            align="text-center"
            color="text-base-400"
            size={2}
            weight="font-semibold"
          >
            Выберите группу мышц
          </Text>
          <Flex justify="between" vertical={true}>
            <Button full={true} variant="none">
              <Text>Спина</Text>
              <Text>7 упражнений</Text>
            </Button>
          </Flex>
          <Button
            // className={styles.button}
            variant="none"
          >
            Настроить
          </Button>
        </Flex>
      </Modal>
    )}
    title="Тренировка"
  />
);
