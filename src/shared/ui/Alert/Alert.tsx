import clsx from 'clsx';

import { CopyIcon, CrossIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/shared/icons';
import { copyToClipboard } from '@/shared/lib/copy-to-clipboard';

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
  isCopy?: boolean
  onClose?: () => void
  type?: 'success' | 'info' | 'warning' | 'error' | 'base'
}

export const Alert = ({
  className,
  closable = true,
  content,
  description,
  isCopy,
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
    <Flex className={styles.rightAction} gap={4}>
      {isCopy ? (
        <Button
          className={styles.button}
          iconOnly={true}
          onClick={() => copyToClipboard(`${content} ${description}`)}
          variant="none"
        >
          <CopyIcon height={22} width={22} />
        </Button>
      ) : null}
      {closable ? (
        <Button
          className={styles.button}
          iconOnly={true}
          onClick={onClose}
          variant="none"
        >
          <CrossIcon />
        </Button>
      ) : null}
    </Flex>
  </Background>
);
