'use client'
import { ButtonProps, Button as HeroUIButton } from '@heroui/button'
import { extendVariants, forwardRef } from '@heroui/system'
import { ReactElement, useMemo } from 'react'

type RestrictedButtonProps = Omit<ButtonProps, 'variant' | 'color'>

export const ButtonFeatured = forwardRef(
  (props: RestrictedButtonProps, ref) => {
    const MyComponent = useMemo(
      () =>
        extendVariants(HeroUIButton, {
          variants: {
            color: {
              secondary:
                'bg-gradient-to-br bg-transparent dark:from-[#F3B37C33] from-[#F3B37C33] dark:via-[#12141433] via-[#FFFFFF33] dark:to-[#8EB5BB33] to-[#8EB5BB33] text-primary-600 dark:text-white secondary-button-border-gradient font-medium'
            }
          },
          defaultVariants: {
            color: 'secondary',
            variant: 'solid'
          }
        }),
      []
    )
    return (
      <MyComponent
        {...props}
        variant="solid"
        color="secondary"
        radius={undefined}
        ref={ref}
      />
    )
  }
) as (props: RestrictedButtonProps) => ReactElement
