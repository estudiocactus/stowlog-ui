"use client";

import { Select as HeroUISelect, SelectProps } from "@heroui/select";
import { extendVariants, forwardRef } from "@heroui/system";
import { ForwardedRef, ReactElement, useMemo } from "react";
export { SelectItem, SelectSection } from "@heroui/select";

type RestrictedSelectProps = Omit<SelectProps, "color" | "variant">;

export const Select = forwardRef(function Select(
  props: RestrictedSelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) {
  const { ...otherProps } = props;
  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUISelect, {
        variants: {
          variant: {
            bordered: {
              trigger: "shadow-none border bg-content1",
              label: "text-foreground-400",
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
  ) as typeof HeroUISelect;

  return (
    <MyComponent
      {...otherProps}
      variant="bordered"
      color="default"
      radius={undefined}
      ref={ref}
    />
  );
}) as <T extends object>(props: SelectProps<T>) => ReactElement;
