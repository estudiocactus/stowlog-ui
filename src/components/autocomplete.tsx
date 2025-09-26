"use client";

import {
  Autocomplete as HeroUIAutocomplete,
  AutocompleteProps,
  AutocompleteItem,
  AutocompleteSection,
  extendVariants,
  forwardRef,
} from "@heroui/react";
import { ReactElement, useMemo } from "react";
export { AutocompleteItem, AutocompleteSection };

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
}) as <T extends object>(props: AutocompleteProps<T>) => ReactElement;
