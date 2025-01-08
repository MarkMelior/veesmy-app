import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const StopwatchOutlineIcon = ({
  fill = 'currentColor',
  height = 16,
  strokeWidth = 1.5,
  width = 16,
}: IIcon) => (
  <Icon
    height={height}
    viewBox="0 0 16 16"
    width={width}
  >
    <path
      d="M7.17647 7.05263V8.94737H5.23529M13 4.52632L11.7059 3.26316M5.88235 2H8.47059M7.17647 14C5.80359 14 4.48693 13.4677 3.51615 12.5201C2.54538 11.5726 2 10.2874 2 8.94737C2 7.60733 2.54538 6.32217 3.51615 5.37462C4.48693 4.42707 5.80359 3.89474 7.17647 3.89474C8.54936 3.89474 9.86601 4.42707 10.8368 5.37462C11.8076 6.32217 12.3529 7.60733 12.3529 8.94737C12.3529 10.2874 11.8076 11.5726 10.8368 12.5201C9.86601 13.4677 8.54936 14 7.17647 14Z"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </Icon>
);
