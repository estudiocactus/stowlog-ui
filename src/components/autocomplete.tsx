"use client";

import {
  Autocomplete as HeroUIAutocomplete,
  AutocompleteProps,
} from "@heroui/autocomplete";
import { extendVariants, forwardRef } from "@heroui/system";
import { ReactElement, useMemo } from "react";
export { AutocompleteItem, AutocompleteSection } from "@heroui/autocomplete";

type RestrictedAutocompleteProps = Omit<AutocompleteProps, "color" | "variant">;

export const Autocomplete = forwardRef(function Autocomplete(
  props: RestrictedAutocompleteProps,
  ref
) {
  const { ...otherProps } = props;
  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUIAutocomplete, {
        defaultVariants: {
          color: "default",
          variant: "bordered",
        },
      }),
    []
  ) as typeof HeroUIAutocomplete;

  return (
    <MyComponent
      {...otherProps}
      inputProps={{
        variant: "bordered",
      }}
      variant="bordered"
      radius={undefined}
      ref={ref}
    />
  );
}) as (props: RestrictedAutocompleteProps) => ReactElement;
