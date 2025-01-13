'use client';

import { clsx } from 'clsx';
import { useEffect, useMemo } from 'react';

import { PauseIcon, PlayIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { Background, Button, Flex, Layout, Text } from '@/shared/ui';

import { useTimer } from '../store';
import { formatTimerTime } from '../utils';

import styles from './timer.module.scss';

export const Timer = () => {
  const {
    initializeAudio,
    isPaused,
    isPlaying,
    isRunning,
    pauseTimer,
    resetTimer,
    resumeTimer,
    startTimer,
    stopSound,
    time,
  } = useTimer();

  useEffect(() => {
    initializeAudio();

    return () => resetTimer();
  }, [initializeAudio]);

  const RenderButtons = useMemo(() => {
    if (isPlaying) {
      return (
        <Button
          className={styles.button}
          onClick={stopSound}
          radius="full"
          size="large"
          variant="solid"
        >
          Остановить
        </Button>
      );
    }

    if (isRunning) {
      return (
        <Flex gap={10}>
          <Button
            className={clsx(styles.button, styles.buttonPause)}
            iconOnly={true}
            onClick={isPaused ? resumeTimer : pauseTimer}
            radius="full"
            size="large"
            variant="flat"
          >
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </Button>
          <Button
            className={styles.button}
            color="base"
            onClick={resetTimer}
            radius="full"
            size="large"
            variant="flat"
          >
            Сброс
          </Button>
        </Flex>
      );
    }

    return (
      <Button
        className={clsx(styles.button, styles.buttonStart)}
        icon={(
          <StopwatchOutlineIcon
            height={24}
            strokeWidth={1.25}
            width={24}
          />
        )}
        onClick={startTimer}
        radius="full"
        size="large"
        variant="solid"
      >
        Запустить
      </Button>
    );
  }, [
    isPlaying,
    isRunning,
    startTimer,
    stopSound,
    isPaused,
    resumeTimer,
    pauseTimer,
    resetTimer,
  ]);

  return (
    <Layout className={styles.wrapper}>
      <Background className={styles.background} radius="full">
        {RenderButtons}
        {/* TODO: Добавить выбор времени в таймере - https://melior-app.atlassian.net/browse/VEES-9 */}
        <Button
          className={clsx(styles.button, { [styles.active]: isRunning }, 'ml-auto')}
          color="base"
        >
          <Text
            color={isRunning ? 'text-primary-400' : 'text-base-500'}
            size={isRunning ? 3 : 2.25}
            weight={isRunning ? 'font-light' : 'font-extralight'}
          >
            {formatTimerTime(time)}
          </Text>
        </Button>
      </Background>
    </Layout>
  );
};
