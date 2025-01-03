'use client';

import { cloneElement, isValidElement, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import { Flex } from '../Flex';

import styles from './modal.module.scss';

interface IModal {
  button: React.ReactElement<{ onClick?: () => void }>
  children: React.ReactNode
}

export const Modal = ({
  button,
  children,
}: IModal) => {
  const [isOpen, setOpen] = useState(false);
  const [isMount, setMount] = useState(false);

  const openModal = useCallback(() => {
    setOpen(true);
    setMount(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);

    setTimeout(() => {
      setMount(false);
    }, 150);
  }, []);

  const buttonElement = isValidElement(button)
    ? cloneElement(button, { onClick: openModal })
    : button;

  const portalTarget = document.querySelector('#modal-root');

  return (
    <>
      {buttonElement}
      {isMount && portalTarget ? createPortal(
        <>
          <div
            className={styles.overlay}
            data-closing={!isOpen}
            onClick={closeModal}
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
