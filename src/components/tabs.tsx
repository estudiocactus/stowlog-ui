"use client";
import { extendVariants, forwardRef } from "@heroui/system";
import { Tabs as HeroUITabs, TabsProps } from "@heroui/react";
import { ReactElement, useMemo } from "react";

type CustomTabsProps = Omit<TabsProps, "variant" | "color">;

export const Tabs = forwardRef((props: CustomTabsProps, ref) => {
  const { ...otherProps } = props;

  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUITabs, {
        variants: {
          variant: {
            bordered: {
              tabList:
                "shadow-none h-full bg-default-100 border border-default-300",
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
      radius={undefined}
      color="default"
      variant="bordered"
      ref={ref}
    />
  );
}) as (props: CustomTabsProps) => ReactElement;
