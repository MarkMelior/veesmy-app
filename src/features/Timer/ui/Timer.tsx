'use client';

import { useState, useEffect } from 'react';

import { Background, Button, Flex, Layout, Text } from '@/shared/ui';

import styles from './timer.module.scss';

export const Timer = () => {
  const [time, setTime] = useState(240);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(240);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Layout className={styles.wrapper}>
      <Background className={styles.background} radius="full">
        {isRunning ? (
          <Flex gap={10}>
            <Button
              className={styles.button}
              onClick={pauseTimer}
              radius="full"
              size="large"
              variant="flat"
            >
              Пауза
            </Button>
            <Button
              className={styles.button}
              color="default"
              onClick={resetTimer}
              radius="full"
              size="large"
              variant="flat"
            >
              Сброс
            </Button>
          </Flex>
        ) : (
          <Button
            className={styles.button}
            onClick={startTimer}
            radius="full"
            size="large"
            variant="solid"
          >
            Запустить таймер
          </Button>
        )}
        <Flex align="end" gap={2} justify="end">
          <Text
            color={isRunning ? 'text-primary-600' : 'text-base-500'}
            size={isRunning ? 3 : 2.25}
            weight={isRunning ? 'font-light' : 'font-extralight'}
          >
            {formatTime(time)}
          </Text>
        </Flex>
      </Background>
    </Layout>
  );
};
