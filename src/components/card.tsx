'use client'
import { CardProps, Card as HeroUICard } from '@heroui/card'
import { extendVariants, forwardRef } from '@heroui/system'
import { ReactElement } from 'react'

export const Card = forwardRef((props: CardProps, ref) => {
  const { ...otherProps } = props

  const MyComponent = extendVariants(HeroUICard, {
    variants: {
      shadow: {
        none: {
          base: 'border'
        }
      }
    },
    defaultVariants: {
      shadow: 'none'
    }
  })

  return (
    <MyComponent {...otherProps} shadow="none" radius={undefined} ref={ref} />
  )
}) as (props: CardProps) => ReactElement

export { CardBody, CardFooter, CardHeader } from '@heroui/card'
