'use client'
import { ButtonProps, Button as HeroUIButton } from "@heroui/button";
import { extendVariants, forwardRef } from "@heroui/system";
import { useMemo } from "react";


export const Button = forwardRef((props: ButtonProps, ref) => {
  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUIButton, {
        variants: {
          color: {
            secondary: 'bg-gradient-to-br bg-transparent dark:from-[#F3B37C33] from-[#F3B37C33] dark:via-[#12141433] via-[#FFFFFF33] dark:to-[#8EB5BB33] to-[#8EB5BB33] text-primary-600 dark:text-white secondary-button-border-gradient',
            primary: "primary-button-gradient"
          }
        },
        defaultVariants: {
          color: "default",
          variant: "solid",
        },
        compoundVariants: [
          {
            color: 'primary',
            class: 'font-medium'
          },
          {
            color: 'secondary',
            class: 'font-medium'
          },
          {
            color: 'danger',
            class: 'font-medium'
          },
          {
            color: 'default',
            class: 'font-medium text-default-600'
          },
          {
            color: 'success',
            class: 'font-medium'
          },
          {
            color: 'warning',
            class: 'font-medium'
          },
        ],
      }),
    []
  );
  return <MyComponent {...props} radius={undefined} variant="solid"  ref={ref} />;
});

Button.displayName = 'Button';

