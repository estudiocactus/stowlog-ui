'use client'
import { SwitchProps, Switch as HeroUISwitch } from "@heroui/switch";
import { extendVariants, forwardRef } from "@heroui/system";
import { useMemo } from "react";


export const Switch = forwardRef((props: SwitchProps, ref) => {
  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUISwitch, {
        defaultVariants: {
          color: "default",
          variant: "solid",
        },
      }),
    []
  );
  return <MyComponent {...props}   ref={ref} />;
});

Switch.displayName = 'Switch';

