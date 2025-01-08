import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const FilterOutlineIcon = ({
  fill = 'currentColor',
  height = 26,
  strokeWidth = 1.5,
  width = 26,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 26 26" width={width}>
    <path
      d="M5 3.5H21L15.2857 11.2188V22.5L10.7143 17.75V11.2188L5 3.5Z"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
