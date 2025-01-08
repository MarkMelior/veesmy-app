'use client';

import { clsx } from 'clsx';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { PauseIcon, PlayIcon, StopwatchOutlineIcon } from '@/shared/icons';
import { Background, Button, Flex, Layout, Text } from '@/shared/ui';

import styles from './timer.module.scss';

export const Timer = () => {
  const [time, setTime] = useState(240);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const sound = new Audio('/sounds/alarm.mp3');

    sound.loop = true;
    setAudio(sound);
  }, []);

  const startTimer = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeTimer = useCallback(() => {
    setIsPaused(false);
  }, []);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(240);
  }, []);

  const playSound = useCallback(() => {
    if (audio && !isPlaying) {
      audio.play();
      setIsPlaying(true);

      if (navigator.vibrate) {
        navigator.vibrate([500, 200, 500]);
      }
    }
  }, [audio, isPlaying]);

  const stopAudio = useCallback(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      resetTimer();
    }

    if (navigator.vibrate) {
      navigator.vibrate(0);
    }
  }, [audio, resetTimer]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && !isPaused) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }
          else {
            clearInterval(timer);
            playSound();

            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isPaused, playSound]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const RenderButtons = useMemo(() => {
    if (isPlaying) {
      return (
        <Button
          className={styles.button}
          onClick={stopAudio}
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
        className={styles.button}
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
    stopAudio,
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
            {formatTime(time)}
          </Text>
        </Button>
      </Background>
    </Layout>
  );
};
