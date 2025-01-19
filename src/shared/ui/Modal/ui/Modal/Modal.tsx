'use client';

import { cloneElement, isValidElement, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import { isClient } from '@/shared/lib/next';
import { Flex } from '@/shared/ui';

import styles from './modal.module.scss';
import './modal.global.scss';

export interface IModal {
  button: React.ReactElement<{ onClick?: () => void }>
  children: React.ReactNode
  closeOnClickOverlay?: boolean
  onClickOverlay?: () => void
  onClose?: () => void
  open?: boolean
}

export const Modal = ({
  button,
  children,
  closeOnClickOverlay = true,
  onClickOverlay,
  onClose,
  open,
}: IModal) => {
  const [isMount, setMount] = useState(false);
  const [isClosing, setClosing] = useState(false);

  const body = isClient() ? document.body : null;
  const isControlled = open !== undefined;

  const openModal = useCallback(() => {
    if (!isControlled) {
      setMount(true);
    }
    setClosing(false);

    body?.setAttribute('data-modal-closed', 'false');
  }, [body, isControlled]);

  const handleCloseModal = useCallback(() => {
    setClosing(true);
    onClose?.();

    body?.setAttribute('data-modal-closed', 'true');

    setTimeout(() => {
      if (!isControlled) {
        setMount(false);
      }
      setClosing(false);
    }, 150);
  }, [body, onClose, isControlled]);

  const handleClickOverlay = useCallback(() => {
    onClickOverlay?.();

    if (closeOnClickOverlay) {
      handleCloseModal();
    }
  }, [handleCloseModal, closeOnClickOverlay, onClickOverlay]);

  const buttonElement = isValidElement(button)
    ? cloneElement(button, { onClick: () => {
      openModal();
      button.props.onClick?.();
    } })
    : button;

  const portalTarget = isClient() ? document.querySelector('#modal-root') : null;

  const shouldRender = isControlled ? open || isClosing : isMount;

  return (
    <>
      {buttonElement}
      {shouldRender && portalTarget ? createPortal(
        <>
          <div className="overlay" onClick={handleClickOverlay} />
          <Flex className={styles.wrapper} justify="center">
            <div className={styles.modal}>
              {children}
            </div>
          </Flex>
        </>,
        portalTarget,
      ) : null}
    </>
  );
};
