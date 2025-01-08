import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const ResetIcon = ({
  fill = 'currentColor',
  height = 32,
  strokeWidth = 1.5,
  width = 32,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 32 32" width={width}>
    <path
      d="M5.45218 9.88493C6.93441 7.32677 9.29583 5.39447 12.0967 4.44782C14.8976 3.50116 17.9471 3.60467 20.6774 4.73907C23.4076 5.87347 25.6326 7.96145 26.9379 10.6142C28.2433 13.267 28.5401 16.3038 27.7731 19.1591C27.0061 22.0144 25.2275 24.4937 22.7686 26.1352C20.3096 27.7768 17.3379 28.4688 14.4067 28.0824C11.4755 27.696 8.78465 26.2575 6.83514 24.0348C4.88563 21.812 3.81035 18.9565 3.80951 16"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M11.4286 9.90481H5.33331V3.80957"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
