'use client';

import { ResetIcon } from '@/shared/icons';
import { ModalBase } from '@/shared/ui';

interface IFiltersModal {
  children: React.ReactElement<{ onClick?: () => void }>
}

export const FiltersModal = ({ children }: IFiltersModal) => (
  <ModalBase
    button={children}
    iconAction={<ResetIcon />}
    onClickOverlay={() => { /* Применить фильтры */ }}
    textAction="Сбросить фильтры"
    title="Настройте фильтры"
  >
    Здесь будут фильтры
  </ModalBase>
);
