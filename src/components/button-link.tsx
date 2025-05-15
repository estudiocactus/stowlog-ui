'use client'
import { Link as HeroUILink, LinkProps } from '@heroui/link'
import { cn } from '@heroui/react'
import { extendVariants, forwardRef } from '@heroui/system'
import { ReactElement, useMemo } from 'react'

type RestrictedColor = 'default' | 'success' | 'danger' | 'warning'

type RestrictedButtonProps = Omit<LinkProps, 'variant'> & {
  color?: RestrictedColor
}

export const ButtonLink = forwardRef((props: LinkProps, ref) => {
  const { className, ...otherProps } = props

  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUILink, {
        variants: {}
      }),
    []
  )

  return (
    <MyComponent
      {...otherProps}
      className={cn(className, 'cursor-pointer')}
      ref={ref}
    />
  )
}) as (props: RestrictedButtonProps) => ReactElement
