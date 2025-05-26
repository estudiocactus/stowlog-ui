"use client";
import { ChipProps, Chip as HeroUIChip } from "@heroui/chip";
import { extendVariants, forwardRef } from "@heroui/system";
import { ReactElement, useMemo } from "react";

export const Chip = forwardRef((props: ChipProps, ref) => {
  const { ...otherProps } = props;

  const MyComponent = useMemo(() => extendVariants(HeroUIChip, {}), []);

  return <MyComponent {...otherProps} radius="sm" ref={ref} />;
}) as (props: ChipProps) => ReactElement;
