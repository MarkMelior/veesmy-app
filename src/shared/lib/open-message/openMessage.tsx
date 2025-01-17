'use client';

import { clsx } from 'clsx';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import { CrossIcon, ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/shared/icons';
import { Background, Button, Flex, Text } from '@/shared/ui';

import styles from './openMessage.module.scss';

export interface IOpenMessage {
  content: string
  description?: string
  duration?: number
  type?: 'success' | 'info' | 'warning' | 'error' | 'base'
}

const getIcon = (type: IOpenMessage['type']) => {
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

const MessageContainer = ({
  content,
  description,
  duration = 3,
  onClose,
  type = 'success',
}: IOpenMessage & { onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <Background
      className={clsx(styles.wrapper, styles[type])}
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
      <Button
        className={styles.close}
        iconOnly={true}
        onClick={onClose}
        variant="none"
      >
        <CrossIcon />
      </Button>
    </Background>
  );
};

export const openMessage = (message: IOpenMessage) => {
  const rootContainer = document.getElementById('message-root');

  if (!rootContainer) {
    console.error('Root container #message-root not found!');

    return;
  }

  // Проверяем, есть ли сообщение с таким же содержимым
  const existingMessage = Array.from(
    rootContainer.querySelectorAll('[data-message="open"]'),
  ).find((msg) => msg.textContent?.includes(message.content));

  if (existingMessage) {
    // Если сообщение уже существует, добавляем класс тряски
    existingMessage.classList.add(styles.shake);

    setTimeout(() => {
      existingMessage.classList.remove(styles.shake);
    }, 500); // Длительность совпадает с shake анимацией

    return;
  }

  const container = document.createElement('div');

  container.setAttribute('data-message', 'open');
  rootContainer.appendChild(container);

  const root = createRoot(container);

  const removeMessage = () => {
    container.setAttribute('data-message', 'closed');

    const timeoutId = setTimeout(() => {
      root.unmount();
      rootContainer.removeChild(container);
    }, 300); // Длительность совпадает с fade-in-from-top анимацией

    return () => clearTimeout(timeoutId);
  };

  root.render(
    // eslint-disable-next-line react/jsx-props-no-spreading
    <MessageContainer {...message} onClose={removeMessage} />,
  );
};
