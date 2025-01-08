import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const ArrowLeftIcon = ({
  className,
  fill = 'currentColor',
  height = 26,
  strokeWidth = 1.5,
  width = 26,
}: IIcon) => (
  <Icon className={className} height={height} width={width}>
    <path
      d="M22.5 13L3.5 13"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M10.5 6L3.5 13L10.5 20"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
