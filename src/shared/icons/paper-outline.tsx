import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const PaperOutlineIcon = ({
  fill = 'currentColor',
  height = 16,
  strokeWidth = 1.5,
  width = 16,
}: IIcon) => (
  <Icon height={height} width={width}>
    <path
      d="M4 14H12C11.3333 14 10 13.6 10 12V10.6667H2V12C2 13.6 3.33333 14 4 14Z"
      fill={fill}
    />
    <path
      d="M4.11111 8.55556V4.11111C4.11111 3.81643 4.22817 3.53381 4.43655 3.32544C4.64492 3.11706 4.92754 3 5.22222 3H11.8889C12.1836 3 12.4662 3.11706 12.6746 3.32544C12.8829 3.53381 13 3.81643 13 4.11111V11.3333C13 11.8889 12.6667 13 11.3333 13M11.3333 13H4.66667C4.11111 13 3 12.6667 3 11.3333V10.2222H9.66667V11.3333C9.66667 12.6667 10.7778 13 11.3333 13Z"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
