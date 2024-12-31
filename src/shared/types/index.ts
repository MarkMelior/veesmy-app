import { JSX } from 'react';

export type TComponent = keyof JSX.IntrinsicElements | React.ElementType;
