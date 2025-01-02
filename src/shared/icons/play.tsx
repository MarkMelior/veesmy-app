import React from 'react';

import { Icon, IIcon } from '@/shared/ui';

export const PlayIcon = ({
  fill = 'currentColor',
  height = 32,
  width = 32,
}: IIcon) => (
  <Icon height={height} width={width}>
    <path
      d="M9 5.95798V16V26.042C9 27.6823 10.8659 28.6251 12.1864 27.6521L25.8148 17.6101C26.8997 16.8108 26.8997 15.1892 25.8148 14.3899L12.1864 4.34787C10.8659 3.37485 9 4.31769 9 5.95798Z"
      fill={fill}
    />
  </Icon>
);
