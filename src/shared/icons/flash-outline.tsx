import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const FlashOutlineIcon = ({
  fill = 'currentColor',
  height = 28,
  strokeWidth = 1.5,
  width = 28,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 28 28" width={width}>
    <path
      d="M12.3357 16.038H13.8472V20.9609C13.8472 21.4221 13.8472 21.8149 13.877 22.0962C13.8924 22.2374 13.92 22.404 13.9873 22.553C14.0323 22.66 14.1019 22.755 14.1905 22.8301C14.2791 22.9053 14.3841 22.9585 14.497 22.9855C14.6109 23.0084 14.7286 23.0042 14.8406 22.9731C14.9525 22.942 15.0556 22.885 15.1414 22.8067C15.2567 22.6995 15.3549 22.5752 15.4326 22.4382C15.5783 22.1955 15.7427 21.8391 15.9368 21.421L15.9523 21.389L18.9643 14.8796L18.9841 14.8387C19.2942 14.1691 19.5534 13.6097 19.688 13.154C19.8271 12.6796 19.8734 12.182 19.5832 11.7264C19.2931 11.2718 18.8208 11.1052 18.3321 11.0324C17.8621 10.9629 17.2453 10.9629 16.5072 10.9629H14.9505V6.04C14.9505 5.57882 14.9505 5.18605 14.9207 4.90471C14.9074 4.74772 14.8702 4.59369 14.8104 4.44795C14.7654 4.34089 14.6958 4.24593 14.6072 4.17079C14.5186 4.09565 14.4136 4.04244 14.3007 4.01546C14.1868 3.99161 14.0689 3.9954 13.9568 4.0265C13.8447 4.05759 13.7417 4.1151 13.6563 4.19419C13.541 4.30146 13.4428 4.42573 13.3651 4.56269C13.2194 4.80542 13.055 5.16178 12.8609 5.57993L12.8454 5.61192L9.83344 12.1213L9.81358 12.1622C9.50355 12.8319 9.24428 13.3912 9.10968 13.8469C8.97066 14.3213 8.92322 14.8189 9.21449 15.2745C9.50466 15.7291 9.97686 15.8957 10.4656 15.9685C10.9356 16.038 11.5524 16.038 12.2905 16.038H12.3357Z"
      stroke={fill}
      strokeWidth={strokeWidth}
    />
  </Icon>
);
