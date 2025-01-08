'use client';

import { ResetIcon } from '@/shared/icons';
import { ModalBase } from '@/shared/ui';

interface ISortModal {
  children: React.ReactElement<{ onClick?: () => void }>
}

export const SortModal = ({ children }: ISortModal) => (
  <ModalBase
    action={{
      icon: <ResetIcon />,
      onClick: () => { /* Применить сортировку */ },
      text: 'Сбросить сортировку',
    }}
    button={children}
    title="Выбери сортировку"
  >
    Здесь будет сортировка
  </ModalBase>
);
