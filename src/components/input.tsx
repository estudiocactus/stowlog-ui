'use client'
import { Input as HeroUIInput, InputProps, extendVariants, forwardRef } from '@heroui/react'
import { ReactElement, useMemo } from 'react'

type RestrictedInputProps = Omit<InputProps, 'variant'>

export const Input = forwardRef((props: RestrictedInputProps, ref) => {
  const { startContent, endContent, ...otherProps } = props

  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUIInput, {
        variants: {
          variant: {
            bordered: {
              inputWrapper: 'shadow-none bg-content1',
              input: 'placeholder:text-default-400'
            }
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
      {...(startContent && {
        startContent: <div className="text-default-300">{startContent}</div>
      })}
      {...(endContent && {
        endContent: <div className="text-default-300">{endContent}</div>
      })}
      radius={undefined}
      ref={ref}
    />
  )
}) as (props: RestrictedInputProps) => ReactElement
