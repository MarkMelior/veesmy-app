'use client';

import { ResetIcon } from '@/shared/icons';
import { ModalBase } from '@/shared/ui';

interface ISortModal {
  children: React.ReactElement<{ onClick?: () => void }>
}

export const SortModal = ({ children }: ISortModal) => (
  <ModalBase
    button={children}
    iconAction={<ResetIcon />}
    onClickOverlay={() => { /* Применить сортировку */ }}
    textAction="Сбросить сортировку"
    title="Выбери сортировку"
  >
    Здесь будет сортировка
  </ModalBase>
);
