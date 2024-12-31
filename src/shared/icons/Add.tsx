import React from 'react';

import { Icon, IIcon } from '@/shared/ui';

export const AddIcon = ({
  fill = 'currentColor',
  height = 27,
  strokeWidth = 1.5,
  width = 26,
}: IIcon) => (
  <Icon height={height} width={width}>
    <rect
      height="21.5"
      rx="7.25"
      stroke={fill}
      strokeWidth={strokeWidth}
      width="21.5"
      x="2.75"
      y="2.75"
    />
    <path
      d="M13.5 9V13.5M13.5 18V13.5M13.5 13.5H18M13.5 13.5H9"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
