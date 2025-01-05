import { JSX } from 'react';

import { AppRoutes } from '../constants';

export type * from './tailwind';

export type TComponent = keyof JSX.IntrinsicElements | React.ElementType;

export type TLinkOrClick<T> =
  | (T & { href: AppRoutes, onClick?: never })
  | (T & { href?: never, onClick: () => void });
