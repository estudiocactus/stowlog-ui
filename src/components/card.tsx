"use client";
import { CardProps, Card as HeroUICard, CardBody, CardFooter, CardHeader, extendVariants, forwardRef } from "@heroui/react";
import { ReactElement, useMemo } from "react";

export const Card = forwardRef((props: CardProps, ref) => {
  const { ...otherProps } = props;

  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUICard, {
        variants: {
          shadow: {
            none: {
              base: "border",
            },
          },
        },
        defaultVariants: {
          shadow: "none",
        },
      }),
    []
  );

  return (
    <MyComponent {...otherProps} shadow="none" radius={undefined} ref={ref} />
  );
}) as (props: CardProps) => ReactElement;

export { CardBody, CardFooter, CardHeader };
