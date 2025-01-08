import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const FinishOutlineIcon = ({
  fill = 'currentColor',
  height = 26,
  strokeWidth = 1.5,
  width = 26,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 26 26" width={width}>
    <path
      d="M4 14.5V3.25C4 2.896 4 2.719 4.1095 2.6095C4.219 2.5 4.396 2.5 4.75 2.5H10.573C11.023 2.5 11.2495 2.5 11.431 2.6125C11.611 2.7235 11.713 2.926 11.914 3.3295L12.586 4.6705C12.787 5.0755 12.8875 5.2765 13.069 5.3875C13.2505 5.5 13.4755 5.5 13.927 5.5H21.25C21.604 5.5 21.781 5.5 21.8905 5.6095C22 5.719 22 5.896 22 6.25V16.75C22 17.104 22 17.281 21.8905 17.3905C21.781 17.5 21.604 17.5 21.25 17.5H13.927C13.477 17.5 13.2505 17.5 13.069 17.3875C12.889 17.2765 12.787 17.074 12.586 16.6705L11.914 15.3295C11.713 14.9245 11.6125 14.7235 11.431 14.6125C11.2495 14.5 11.0245 14.5 10.573 14.5H4ZM4 14.5V23.5"
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={strokeWidth}
    />
    <rect fill={fill} height="2.36419" rx="0.788062" width="2.36419" x="5.93372" y="3.94177" />
    <rect fill={fill} height="2.36419" rx="0.788062" width="2.36419" x="8.87579" y="7.00647" />
    <rect fill={fill} height="2.36419" rx="0.788062" width="2.36419" x="5.93372" y="10.0711" />
    <rect fill={fill} height="2.36419" rx="0.788062" width="2.36419" x="11.8179" y="10.0711" />
    <rect fill={fill} height="2.36419" rx="0.788062" width="2.36419" x="14.76" y="13.1358" />
    <rect fill={fill} height="2.36419" rx="0.788062" width="2.36419" x="14.76" y="7.00647" />
    <rect fill={fill} height="2.36419" rx="0.788062" width="2.36419" x="17.7021" y="10.0711" />
  </Icon>
);
