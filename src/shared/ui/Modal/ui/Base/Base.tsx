import { Button, Flex, Text } from '@/shared/ui';

import { Modal } from '../Modal/Modal';

import styles from './base.module.scss';

import type { IModal } from '../Modal/Modal';

interface IModalBase extends IModal {
  iconAction?: React.ReactNode
  onClickAction?: () => void
  textAction?: string
  title: React.ReactNode
}

export const ModalBase = ({
  button,
  children,
  closeOnClickOverlay,
  iconAction,
  onClickAction,
  onClickOverlay,
  onClose,
  textAction,
  title,
}: IModalBase) => (
  <Modal
    button={button}
    closeOnClickOverlay={closeOnClickOverlay}
    onClickOverlay={onClickOverlay}
    onClose={onClose}
    pointerEvents={false}
  >
    <Flex align="center" gap={56} vertical={true}>
      <Text
        align="text-center"
        className={styles.title}
        color="text-base-400"
        size={2}
        weight="font-semibold"
      >
        {title}
      </Text>
      <div className={styles.content}>
        {children}
      </div>
      <Button
        className={styles.action}
        color="base"
        icon={iconAction}
        onClick={onClickAction}
        size="large"
        variant="none"
      >
        {textAction}
      </Button>
    </Flex>
  </Modal>
);
