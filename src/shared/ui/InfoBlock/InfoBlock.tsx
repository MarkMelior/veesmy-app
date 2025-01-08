'use client';

import { clsx } from 'clsx';
import { useEffect, useRef, useState } from 'react';

import { Background, Button } from '@/shared/ui';

import styles from './infoBlock.module.scss';

interface IInfoBlock {
  children: React.ReactNode
  maxHeight?: number
  textButton?: string
}

export const InfoBlock = ({
  children,
  maxHeight,
  textButton = 'Показать все',
}: IInfoBlock) => {
  const [showAll, setShowAll] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const defaultMaxHeight = maxHeight ?? 999;

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }

    wrapperRef.current.style.setProperty(
      '--info-block-height', `${showAll ? wrapperRef.current.scrollHeight : defaultMaxHeight}px`,
    );
  }, [defaultMaxHeight, showAll]);

  return (
    <Background className={clsx(styles.background, { [styles.showButton]: maxHeight })}>
      <div
        className={styles.wrapper}
        ref={wrapperRef}
        style={{ '--info-block-height': `${defaultMaxHeight}px` } as React.CSSProperties}
      >
        {children}
      </div>
      {maxHeight ? (
        <Button
          className={styles.button}
          full={true}
          isActiveAnimation={false}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? 'Скрыть' : textButton}
        </Button>
      ) : null}
    </Background>
  );
};
