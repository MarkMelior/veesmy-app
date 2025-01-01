'use client';

import { clsx } from 'clsx';
import { Fragment, useEffect, useRef, useState } from 'react';

import { Background, Button, Divider, Flex, Text } from '@/shared/ui';

import styles from './infoBlock.module.scss';

export interface IInfoBlockItem {
  hideTitle?: boolean
  icon?: React.ReactNode
  title: string
  value: React.ReactNode
}

interface IInfoBlock {
  items: IInfoBlockItem[]
  showAllCountItems?: number
  showAllText?: string
}

export const InfoBlock = ({
  items,
  showAllCountItems = 3,
  showAllText = 'Показать все',
}: IInfoBlock) => {
  const [showAll, setShowAll] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const isShowAll = items.length > showAllCountItems;

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }

    // Если showAll активен, берем полную высоту элемента
    if (showAll) {
      const fullHeight = wrapperRef.current.scrollHeight;

      wrapperRef.current.style.setProperty('--info-block-height', `${fullHeight}px`);

      return;
    }

    // Получение всех элементов Flex и Divider
    const itemElements = wrapperRef.current.querySelectorAll(`.${styles.item}`);
    const dividerElements = wrapperRef.current.querySelectorAll(`.${styles.divider}`);

    // Рассчитываем общую высоту для ограниченного количества элементов
    let totalHeight = 0;

    for (let i = 0; i < showAllCountItems; i++) {
      if (itemElements[i]) {
        totalHeight += itemElements[i].clientHeight;
      }
      if (dividerElements[i] && i < showAllCountItems - 1) {
        totalHeight += dividerElements[i].clientHeight || 12;
      }
    }

    // Устанавливаем CSS-переменную
    wrapperRef.current.style.setProperty('--info-block-height', `${totalHeight}px`);
  }, [showAll, showAllCountItems, items.length]);

  if (!items.length) {
    return null;
  }

  return (
    <Background className={clsx(styles.background, { [styles.isShowAll]: isShowAll })}>
      <div
        className={styles.wrapper}
        ref={wrapperRef}
      >
        {items.map(({ hideTitle, icon, title, value }, index) => (
          <Fragment key={title}>
            <Flex className={styles.item} vertical={true}>
              {hideTitle ? null : (
                <Flex align="center" gap={2}>
                  {icon}
                  <Text color="text-base-500" size={0.8}>{title}</Text>
                </Flex>
              )}
              {value}
            </Flex>
            {index !== items.length - 1 ? <Divider className={styles.divider} /> : null}
          </Fragment>
        ))}
      </div>
      {isShowAll ? (
        <Button
          className={styles.button}
          full={true}
          onClick={() => setShowAll(prev => !prev)}
        >
          {showAll ? 'Скрыть' : showAllText}
        </Button>
      ) : null}
    </Background>
  );
};
