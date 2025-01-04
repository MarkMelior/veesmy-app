'use client';

import { clsx } from 'clsx';
import { cloneElement, isValidElement, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import { isClient } from '@/shared/lib/next';
import { Flex } from '@/shared/ui';

import styles from './modal.module.scss';

export interface IModal {
  button: React.ReactElement<{ onClick?: () => void }>
  children: React.ReactNode
  closeOnClickOverlay?: boolean
  onClickOverlay?: () => void
  onClose?: () => void
  pointerEvents?: boolean
}

export const Modal = ({
  button,
  children,
  closeOnClickOverlay = true,
  onClickOverlay,
  onClose,
  pointerEvents = true,
}: IModal) => {
  const [isMount, setMount] = useState(false);

  const body = isClient() ? document.body : null;

  const openModal = useCallback(() => {
    setMount(true);

    body?.setAttribute('data-closing', 'false');
  }, [body]);

  const closeModal = useCallback(() => {
    onClose?.();

    body?.setAttribute('data-closing', 'true');

    setTimeout(() => {
      setMount(false);
    }, 150);
  }, [body, onClose]);

  const handleClickOverlay = useCallback(() => {
    onClickOverlay?.();

    if (closeOnClickOverlay) {
      closeModal();
    }
  }, [closeModal, closeOnClickOverlay, onClickOverlay]);

  const buttonElement = isValidElement(button)
    ? cloneElement(button, { onClick: openModal })
    : button;

  const portalTarget = isClient() ? document.querySelector('#modal-root') : null;

  return (
    <>
      {buttonElement}
      {isMount && portalTarget ? createPortal(
        <>
          <div className={styles.overlay} onClick={handleClickOverlay} />
          <Flex
            align="center"
            className={styles.wrapper}
            justify="center"
          >
            <div className={clsx(styles.modal, { [styles.pointerEvents]: pointerEvents })}>
              {children}
            </div>
          </Flex>
        </>,
        portalTarget,
      ) : null}
    </>
  );
};
