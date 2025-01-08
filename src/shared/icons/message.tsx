import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const MessageIcon = ({
  fill = 'currentColor',
  height = 14,
  width = 14,
}: IIcon) => (
  <Icon height={height} width={width}>
    <path
      d="M0.538467 6.94018C0.538467 3.74369 3.54696 1.34616 7.00001 1.34616C10.4531 1.34616 13.4615 3.74369 13.4615 6.94018C13.4615 10.1367 10.4531 12.5342 7.00001 12.5342C6.57742 12.5338 6.16582 12.4998 5.76521 12.4322C5.70511 12.4802 5.60173 12.5671 5.47444 12.6586C5.10678 12.9225 4.57628 13.1923 3.76924 13.1923C3.59787 13.1923 3.43351 13.123 3.31234 12.9996C3.19116 12.8761 3.12308 12.7087 3.12308 12.5342C3.12308 12.1722 3.21548 11.7221 3.06234 11.3785C1.55745 10.3775 0.538467 8.7816 0.538467 6.94018Z"
      fill={fill}
    />
  </Icon>
);
