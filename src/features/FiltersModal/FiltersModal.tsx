'use client';

import { ResetIcon } from '@/shared/icons';
import { ModalBase } from '@/shared/ui';

interface IFiltersModal {
  children: React.ReactElement<{ onClick?: () => void }>
}

export const FiltersModal = ({ children }: IFiltersModal) => (
  <ModalBase
    action={{
      icon: <ResetIcon />,
      onClick: () => { /* Применить фильтры */ },
      text: 'Сбросить фильтры',
    }}
    button={children}
    title="Настрой фильтры"
  >
    Здесь будут фильтры
  </ModalBase>
);
