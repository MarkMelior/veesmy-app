import clsx from 'clsx';

import { CrossIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/shared/icons';

import { Background } from '../Background';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Text } from '../Text';

import styles from './alert.module.scss';

const getIcon = (type: IAlert['type']) => {
  switch (type) {
    case 'success':
      return <SuccessIcon />;
    case 'info':
      return <InfoIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'error':
      return <ErrorIcon />;
    default:
      return <InfoIcon />;
  }
};

export interface IAlert {
  className?: string
  closable?: boolean
  content: string
  description?: string
  onClose?: () => void
  type?: 'success' | 'info' | 'warning' | 'error' | 'base'
}

export const Alert = ({
  className,
  closable = true,
  content,
  description,
  onClose,
  type = 'success',
}: IAlert) => (
  <Background
    className={clsx(styles.wrapper, styles[type], className)}
    radius="large"
  >
    <Flex align="center" gap={12}>
      <div className={styles.icon}>
        {getIcon(type)}
      </div>
      <div>
        <Text weight="font-semibold">{content}</Text>
        {description && <Text as="p" size="text-sm">{description}</Text>}
      </div>
    </Flex>
    {closable ? (
      <Button
        className={styles.close}
        iconOnly={true}
        onClick={onClose}
        variant="none"
      >
        <CrossIcon />
      </Button>
    ) : null}
  </Background>
);
