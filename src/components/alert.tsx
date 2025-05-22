import { Alert as HeroUIAlert, AlertProps } from '@heroui/alert'
import { cn } from '@heroui/react'
import { extendVariants, forwardRef } from '@heroui/system'
import { ReactElement, useMemo } from 'react'

type RestrictedColor = 'default' | 'success' | 'danger' | 'warning'

type RestrictedProps = Omit<AlertProps, 'variant'> & {
  color?: RestrictedColor
}

export const Alert = forwardRef((props: AlertProps, ref) => {
  const { className, ...otherProps } = props

  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUIAlert, {}),
    []
  )

  return (
    <MyComponent
      {...otherProps}
      className={cn(className, 'cursor-pointer')}
      ref={ref}
    />
  )
}) as (props: RestrictedProps) => ReactElement
