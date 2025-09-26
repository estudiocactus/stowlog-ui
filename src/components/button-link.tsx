"use client";
import { Link as HeroUILink, LinkProps, cn, extendVariants, forwardRef } from "@heroui/react";
import { ReactElement, useMemo } from "react";

type RestrictedColor = "foreground" | "success" | "danger" | "warning";

type RestrictedButtonProps = Omit<LinkProps, "variant"> & {
  color?: RestrictedColor;
};

export const ButtonLink = forwardRef((props: LinkProps, ref) => {
  const { className, ...otherProps } = props;

  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUILink, {
        defaultVariants: {
          color: "foreground",
        },
      }),
    []
  );

  return (
    <MyComponent
      {...otherProps}
      className={cn(className, "cursor-pointer")}
      ref={ref}
    />
  );
}) as (props: RestrictedButtonProps) => ReactElement;
