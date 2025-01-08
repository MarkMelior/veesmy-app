import type { AppRoutes } from '../constants';
import type { JSX } from 'react';

export type * from './tailwind';

export type TComponent = keyof JSX.IntrinsicElements | React.ElementType;

export type TLinkOrClick<T> =
  | (T & { href: AppRoutes, onClick?: never })
  | (T & { href?: never, onClick: () => void });
