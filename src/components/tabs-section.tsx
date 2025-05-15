'use client'
import { extendVariants, forwardRef } from '@heroui/system'
import { Tabs as HeroUITabs, TabsProps } from '@heroui/tabs'
import { ReactElement, useMemo } from 'react'

type CustomTabsProps = Omit<TabsProps, 'variant' | 'color'>

export const TabsSection = forwardRef((props: CustomTabsProps, ref) => {
  const { ...otherProps } = props

  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUITabs, {
        variants: {
          variant: {
            underlined: {
              base: 'w-full border-b-1.5',
              tabList: 'p-0',
              tab: 'mx-0',
              cursor: 'w-full'
            }
          }
        },
        defaultVariants: {
          color: 'default',
          variant: 'underlined'
        }
      }),
    []
  )

  return (
    <MyComponent
      {...otherProps}
      radius={undefined}
      color="default"
      variant="underlined"
      ref={ref}
    />
  )
}) as (props: CustomTabsProps) => ReactElement

export { Tab } from '@heroui/tabs'
