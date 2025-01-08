import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const DragIcon = ({
  fill = 'currentColor',
  height = 24,
  width = 24,
}: IIcon) => (
  <Icon height={height} width={width}>
    <rect fill={fill} height="3.4" rx="1.7" width="3.4" x="6.90002" y="3.5" />
    <rect fill={fill} height="3.4" rx="1.7" width="3.4" x="6.90002" y="10.3" />
    <rect fill={fill} height="3.4" rx="1.7" width="3.4" x="6.90002" y="17.1" />
    <rect fill={fill} height="3.4" rx="1.7" width="3.4" x="13.7" y="3.5" />
    <rect fill={fill} height="3.4" rx="1.7" width="3.4" x="13.7" y="10.3" />
    <rect fill={fill} height="3.4" rx="1.7" width="3.4" x="13.7" y="17.1" />
  </Icon>
);
