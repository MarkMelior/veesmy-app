import React from 'react';

import { Icon, IIcon } from '@/shared/ui';

export const CrossIcon = ({
  fill = 'currentColor',
  height = 14,
  strokeWidth = 1.5,
  width = 14,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 14 14" width={width}>
    <path
      d="M1 1L13.1905 13.1905M13.1905 1L1 13.1905"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
