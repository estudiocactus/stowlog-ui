'use client'
import { ButtonProps, Button as HeroUIButton } from '@heroui/button'
import { extendVariants, forwardRef } from '@heroui/system'
import { ReactElement, useMemo } from 'react'

type RestrictedButtonProps = Omit<ButtonProps, 'variant' | 'color'>

export const ButtonPrimary = forwardRef((props: RestrictedButtonProps, ref) => {
  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUIButton, {
        variants: {
          color: {
            primary: 'primary-button-gradient font-medium'
          }
        },
        defaultVariants: {
          color: 'primary',
          variant: 'solid'
        }
      }),
    []
  )
  return (
    <MyComponent
      {...props}
      variant="solid"
      color="primary"
      radius={undefined}
      ref={ref}
    />
  )
}) as (props: RestrictedButtonProps) => ReactElement
