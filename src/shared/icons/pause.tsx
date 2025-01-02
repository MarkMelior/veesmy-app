import React from 'react';

import { Icon, IIcon } from '@/shared/ui';

export const PauseIcon = ({
  fill = 'currentColor',
  height = 32,
  strokeWidth = 3,
  width = 32,
}: IIcon) => (
  <Icon height={height} width={width}>
    <path
      d="M11 6.5L11 24.5"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M21 6.5L21 24.5"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
