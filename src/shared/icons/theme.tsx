import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const ThemeIcon = ({
  fill = 'currentColor',
  height = 28,
  width = 28,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 28 28" width={width}>
    <path
      d="M4 14C4 16.6522 5.05357 19.1957 6.92893 21.0711C8.8043 22.9464 11.3478 24 14 24V4C11.3478 4 8.8043 5.05357 6.92893 6.92893C5.05357 8.8043 4 11.3478 4 14Z"
      fill={fill}
    />
    <path
      d="M14 24C16.6522 24 19.1957 22.9464 21.0711 21.0711C22.9464 19.1957 24 16.6522 24 14C24 11.3478 22.9464 8.8043 21.0711 6.92893C19.1957 5.05357 16.6522 4 14 4M14 24C11.3478 24 8.8043 22.9464 6.92893 21.0711C5.05357 19.1957 4 16.6522 4 14C4 11.3478 5.05357 8.8043 6.92893 6.92893C8.8043 5.05357 11.3478 4 14 4M14 24V4"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
);
