import React from 'react';

import { Icon, IIcon } from '@/shared/ui';

export const PlusIcon = ({
  fill = 'currentColor',
  height = 15,
  strokeWidth = 1.5,
  width = 15,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 15 15" width={width}>
    <path
      d="M7.70001 1.5V7.5M7.70001 13.5V7.5M7.70001 7.5H13.7M7.70001 7.5H1.70001"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
