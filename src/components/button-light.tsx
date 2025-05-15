'use client'
import { ButtonProps, Button as HeroUIButton } from '@heroui/button'
import { extendVariants, forwardRef } from '@heroui/system'
import { ReactElement, useMemo } from 'react'

type RestrictedColor = 'default' | 'success' | 'danger' | 'warning'

type RestrictedButtonProps = Omit<ButtonProps, 'variant'> & {
  color?: RestrictedColor
}

export const ButtonLight = forwardRef((props: RestrictedButtonProps, ref) => {
  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUIButton, {
        variants: {
          variant: {
            light: 'font-medium'
          }
        },
        defaultVariants: {
          color: 'default',
          variant: 'light'
        },
        compoundVariants: [
          {
            variant: 'light',
            color: 'default',
            class: 'text-default-600 data-[hover=true]:bg-default-100'
          }
        ]
      }),
    []
  )
  return <MyComponent {...props} variant="light" radius={undefined} ref={ref} />
}) as (props: RestrictedButtonProps) => ReactElement
