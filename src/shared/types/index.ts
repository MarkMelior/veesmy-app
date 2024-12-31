import { JSX } from 'react';

export type * from './tailwind';

export type TComponent = keyof JSX.IntrinsicElements | React.ElementType;
