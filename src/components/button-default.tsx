'use client'
import { ButtonProps, Button as HeroUIButton, extendVariants, forwardRef } from '@heroui/react'
import { ReactElement, useMemo } from 'react'

type RestrictedColor = 'default' | 'success' | 'danger' | 'warning'

type RestrictedButtonProps = Omit<ButtonProps, 'variant'> & {
  color?: RestrictedColor
}

export const ButtonDefault = forwardRef((props: RestrictedButtonProps, ref) => {
  const { ...otherProps } = props
  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUIButton, {
        variants: {
          variant: {
            bordered: 'font-medium bg-default-100 text-default-600'
          }
        },
        defaultVariants: {
          color: 'default',
          variant: 'bordered'
        }
      }),
    []
  )
  return (
    <MyComponent
      {...otherProps}
      variant="bordered"
      radius={undefined}
      ref={ref}
    />
  )
}) as (props: RestrictedButtonProps) => ReactElement
