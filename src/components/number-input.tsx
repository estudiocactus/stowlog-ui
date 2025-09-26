"use client";
import { NumberInput as HeroUIInput, NumberInputProps, extendVariants, forwardRef } from "@heroui/react";
import { ReactElement, useMemo } from "react";

type RestrictedInputProps = Omit<NumberInputProps, "variant">;

export const NumberInput = forwardRef((props: RestrictedInputProps, ref) => {
  const { ...otherProps } = props;

  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUIInput, {
        variants: {
          variant: {
            bordered: {
              inputWrapper: "shadow-none bg-content1",
              input: "placeholder:text-default-400",
            },
          },
        },
        defaultVariants: {
          color: "default",
          variant: "bordered",
        },
      }),
    []
  );

  return (
    <MyComponent
      {...otherProps}
      variant="bordered"
      radius={undefined}
      ref={ref}
    />
  );
}) as (props: RestrictedInputProps) => ReactElement;
