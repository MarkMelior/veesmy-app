import React from 'react';

import { Icon } from '@/shared/ui';
import type { IIcon } from '@/shared/ui';

export const ImportOutlineIcon = ({
  fill = 'currentColor',
  height = 28,
  width = 28,
}: IIcon) => (
  <Icon height={height} viewBox="0 0 28 28" width={width}>
    <path
      d="M15.1739 20L12.3478 17M15.1739 20L18 17M15.1739 20V18.68C15.1739 15.992 15.1739 14.648 14.681 13.6208C14.2475 12.7177 13.5558 11.9834 12.705 11.5232C11.7374 11 10.4713 11 7.93913 11H5"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M22 10H18.1574C17.8504 10 17.5561 9.87806 17.339 9.661C17.1219 9.44395 17 9.14956 17 8.84259V5C17.4317 5.19676 17.7546 5.5463 18.0845 5.87616L21.1238 8.91551C21.4537 9.24537 21.8044 9.56829 22 10Z"
      fill={fill}
    />
    <path
      d="M7 10.6429C7 10.8702 7.09365 11.0882 7.26035 11.2489C7.42705 11.4097 7.65314 11.5 7.88888 11.5C8.12463 11.5 8.35072 11.4097 8.51742 11.2489C8.68412 11.0882 8.77777 10.8702 8.77777 10.6429H7ZM8.77777 16.2857C8.77777 16.0584 8.68412 15.8404 8.51742 15.6797C8.35072 15.5189 8.12463 15.4286 7.88888 15.4286C7.65314 15.4286 7.42705 15.5189 7.26035 15.6797C7.09365 15.8404 7 16.0584 7 16.2857H8.77777ZM21.8977 10.0001V10.8572C22.0464 10.8572 22.1927 10.8212 22.3233 10.7526C22.4538 10.684 22.5644 10.5848 22.645 10.4643C22.7255 10.3438 22.7734 10.2057 22.7843 10.0627C22.7951 9.91968 22.7686 9.77633 22.7072 9.64577L21.8977 10.0001ZM16.7777 5.06293L17.1451 4.28236C17.0097 4.22309 16.8611 4.19753 16.7128 4.20801C16.5645 4.21848 16.4213 4.26467 16.2963 4.34233C16.1713 4.42 16.0685 4.52666 15.9973 4.65255C15.9261 4.77844 15.8888 4.91954 15.8888 5.06293H16.7777ZM18.3185 22.2857H11.6815V24H18.3185V22.2857ZM11.6815 5.71436H15.2074V4.00008H11.6815V5.71436ZM21.2221 11.5143V19.4857H22.9999V11.5143H21.2221ZM17.2601 6.53378L20.3712 9.53491L21.6287 8.32349L18.5176 5.32236L17.2601 6.53378ZM8.77777 10.6429V8.51434H7V10.6429H8.77777ZM8.77777 19.4857V16.2857H7V19.4857H8.77777ZM20.3712 9.53491C20.8121 9.95891 20.9247 10.0766 21.0041 10.2001L22.5199 9.3052C22.3054 8.96691 22.0091 8.69034 21.6287 8.32349L20.3712 9.53491ZM18.5176 5.32236C18.1371 4.95664 17.8491 4.67093 17.4983 4.46293L16.5703 5.92578C16.6983 6.00121 16.8192 6.10864 17.2601 6.53378L18.5176 5.32236ZM15.2074 5.71436C15.8912 5.71436 16.2468 5.73493 16.5703 5.92578L17.4983 4.46293C16.6841 3.98293 15.8189 4.00008 15.2062 4.00008L15.2074 5.71436ZM22.9999 11.5143C22.9999 10.9246 23.0189 10.0903 22.5199 9.3052L21.0041 10.2001C21.2032 10.5121 21.2221 10.8549 21.2221 11.5143H22.9999ZM21.8977 9.14291H17.9629V10.8572H21.8977V9.14291ZM17.6666 8.8572V5.06293H15.8888V8.8572H17.6666ZM17.9629 9.14291C17.8843 9.14291 17.809 9.11281 17.7534 9.05923C17.6978 9.00565 17.6666 8.93298 17.6666 8.8572H15.8888C15.8888 9.9612 16.818 10.8572 17.9629 10.8572V9.14291ZM16.4103 5.84235C16.6711 5.95664 16.8737 6.16121 17.2601 6.53378L18.5164 5.32236C18.226 5.04122 17.7685 4.55665 17.1451 4.28236L16.4103 5.84235ZM20.3712 9.53491C20.7575 9.90748 20.9697 10.1029 21.0894 10.3555L22.7072 9.64577C22.4227 9.04577 21.9202 8.60463 21.6287 8.32349L20.3712 9.53491ZM11.6815 22.2857C10.3434 22.2857 9.70695 22.072 9.36799 21.7566C9.03614 21.448 8.77777 20.8423 8.77777 19.4857H7C7 20.9532 7.25837 22.176 8.13422 22.9897C9.00177 23.7977 10.2616 24 11.6815 24V22.2857ZM21.2221 19.4857C21.2221 20.776 21.0005 21.3897 20.6734 21.7166C20.3534 22.0366 19.7253 22.2857 18.3185 22.2857V24C19.8402 24 21.1084 23.7509 21.9522 22.9063C22.7901 22.0697 22.9999 20.8549 22.9999 19.4857H21.2221ZM8.77777 8.51434C8.77777 7.22406 8.9994 6.61035 9.32651 6.2835C9.6465 5.9635 10.2746 5.71436 11.6815 5.71436V4.00008C10.1597 4.00008 8.89154 4.24922 8.04651 5.09379C7.20978 5.93035 7 7.14521 7 8.51434H8.77777Z"
      fill={fill}
    />
  </Icon>
);
