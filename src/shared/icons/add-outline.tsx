import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const AddOutlineIcon = ({
  fill = 'currentColor',
  height = 26,
  strokeWidth = 1.5,
  width = 26,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 26 26" width={width}>
    <rect
      height="21.5"
      rx="7.25"
      stroke={fill}
      strokeWidth={strokeWidth}
      width="21.5"
      x="2.75"
      y="2.25"
    />
    <path
      d="M13.5 8.5V13M13.5 17.5V13M13.5 13H18M13.5 13H9"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
