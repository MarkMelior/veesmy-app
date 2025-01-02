import React from 'react';

import { Icon, IIcon } from '@/shared/ui';

export const ArrowDropdownIcon = ({
  className,
  fill = 'currentColor',
  height = 22,
  strokeWidth = 1.5,
  width = 22,
}: IIcon) => (
  <Icon
    className={className}
    height={height}
    viewBox="0 0 22 22"
    width={width}
  >
    <path
      d="M17 14L11 7L5 14"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
