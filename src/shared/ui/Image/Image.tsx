'use client';

import { clsx } from 'clsx';
import NextImage from 'next/image';
import { useState } from 'react';

import { Skeleton } from '../Skeleton';

import styles from './image.module.scss';

interface IImage {
  alt: string
  className?: string
  height: number
  src: string
  width: number
}

export const Image = ({
  alt,
  className,
  height,
  src,
  width,
}: IImage) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={clsx(styles.wrapper, className)}>
      {isLoaded ? null : <Skeleton className={styles.loading} />}
      <NextImage
        alt={alt}
        decoding="async"
        height={height}
        loading="lazy"
        onLoadingComplete={() => setIsLoaded(true)}
        src={src}
        width={width}
      />
    </div>
  );
};
