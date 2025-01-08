'use client';

import { ModalBase } from '@/shared/ui';

interface IThemesModal {
  children: React.ReactElement<{ onClick?: () => void }>
}

export const ThemesModal = ({ children }: IThemesModal) => (
  <ModalBase
    button={children}
    title="Выбери тему"
  >
    Здесь будет список тем
  </ModalBase>
);
