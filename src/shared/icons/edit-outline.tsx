import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const EditOutlineIcon = ({
  fill = 'currentColor',
  height = 26,
  strokeWidth = 1.5,
  width = 26,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 26 26" width={width}>
    <path
      d="M7.09086 7.09094H5.90905C5.28217 7.09094 4.68097 7.33997 4.2377 7.78324C3.79444 8.2265 3.54541 8.8277 3.54541 9.45458V20.0909C3.54541 20.7178 3.79444 21.319 4.2377 21.7623C4.68097 22.2056 5.28217 22.4546 5.90905 22.4546H16.5454C17.1723 22.4546 17.7735 22.2056 18.2168 21.7623C18.66 21.319 18.909 20.7178 18.909 20.0909V18.9091"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M17.7273 4.72729L21.2728 8.27274M22.9096 6.60047C23.375 6.13502 23.6365 5.50372 23.6365 4.84547C23.6365 4.18722 23.375 3.55593 22.9096 3.09047C22.4441 2.62502 21.8128 2.36353 21.1546 2.36353C20.4963 2.36353 19.865 2.62502 19.3996 3.09047L9.45459 13V16.5455H13L22.9096 6.60047Z"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
