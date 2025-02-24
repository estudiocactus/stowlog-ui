'use client'
import { Button as HeroUIButton } from "@heroui/button";
import { extendVariants } from "@heroui/system";

export const Button = extendVariants(HeroUIButton, {
  variants: {
    color: {
      secondary: 'bg-gradient-to-br bg-transparent dark:from-[#61452F] from-[#F7ECE8] dark:via-[#1D2324] via-[#F0F1F2] dark:to-[#273235] to-[#DAE0E4] text-primary-600 dark:text-white secondary-button-border-gradient',
      primary: "primary-button-gradient"
    }
  },
  defaultVariants: {
    color: "primary",
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
});

