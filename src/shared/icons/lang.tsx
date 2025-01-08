import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const LangIcon = ({
  fill = 'currentColor',
  height = 28,
  strokeWidth = 1.5,
  width = 28,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 28 28" width={width}>
    <path
      d="M14 24C19.5227 24 24 19.5227 24 14C24 8.47727 19.5227 4 14 4M14 24C8.47727 24 4 19.5227 4 14C4 8.47727 8.47727 4 14 4M14 24C16.7273 24 17.6364 19.4545 17.6364 14C17.6364 8.54545 16.7273 4 14 4M14 24C11.2727 24 10.3636 19.4545 10.3636 14C10.3636 8.54545 11.2727 4 14 4M4.90909 17.6364H23.0909M4.90909 10.3636H23.0909"
      stroke={fill}
      strokeWidth={strokeWidth}
    />
  </Icon>
);
