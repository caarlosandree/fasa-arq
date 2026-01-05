// Declaração de tipos para corrigir incompatibilidade entre framer-motion 12.x e React 19
// Esta declaração corrige os problemas de tipo conhecidos entre essas versões

declare module 'framer-motion' {
  import * as React from 'react'

  export interface MotionProps {
    initial?: any
    animate?: any
    variants?: any
    transition?: any
    whileHover?: any
    whileTap?: any
    [key: string]: any
  }

  export interface HTMLMotionProps<T extends keyof React.JSX.IntrinsicElements>
    extends MotionProps,
      React.ComponentPropsWithoutRef<T> {}

  export type ForwardRefComponent<T, P> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<T>
  >

  export type HTMLMotionComponents = {
    [K in keyof React.JSX.IntrinsicElements]: ForwardRefComponent<
      React.ElementRef<K>,
      HTMLMotionProps<K>
    >
  }

  export const motion: HTMLMotionComponents
}
