'use client';

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
}

export const Modal = ({
  button,
  children,
  closeOnClickOverlay = true,
  onClickOverlay,
  onClose,
}: IModal) => {
  const [isOpen, setOpen] = useState(false);
  const [isMount, setMount] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
    setMount(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    onClose?.();

    setTimeout(() => {
      setMount(false);
    }, 150);
  }, [onClose]);

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
          <div
            className={styles.overlay}
            data-closing={!isOpen}
            onClick={handleClickOverlay}
          />
          <Flex
            align="center"
            className={styles.wrapper}
            justify="center"
          >
            <div className={styles.modal} data-closing={!isOpen}>
              {children}
            </div>
          </Flex>
        </>,
        portalTarget,
      ) : null}
    </>
  );
};
