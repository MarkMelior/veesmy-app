import { Button, Flex, Text } from '@/shared/ui';

import { Modal } from '../Modal/Modal';

import styles from './base.module.scss';

import type { IModal } from '../Modal/Modal';

interface IModalBase extends IModal {
  action?: {
    text: string
    onClick: () => void
    icon?: React.ReactNode
  }
  title: React.ReactNode
}

export const ModalBase = ({
  action,
  button,
  children,
  closeOnClickOverlay,
  onClickOverlay,
  onClose,
  open,
  title,
}: IModalBase) => (
  <Modal
    button={button}
    closeOnClickOverlay={closeOnClickOverlay}
    onClickOverlay={onClickOverlay}
    onClose={onClose}
    open={open}
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
      {action ? (
        <Button
          className={styles.action}
          color="base"
          icon={action.icon}
          onClick={action.onClick}
          size="large"
          variant="none"
        >
          {action.text}
        </Button>
      ) : null}
    </Flex>
  </Modal>
);
