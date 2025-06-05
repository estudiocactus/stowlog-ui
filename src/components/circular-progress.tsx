import {
  CircularProgress as HeroUICircularProgress,
  CircularProgressProps,
} from "@heroui/progress";
import { extendVariants, forwardRef } from "@heroui/system";
import { ReactElement, useMemo } from "react";

type RestrictedColor = "default";

type RestrictedProps = Omit<CircularProgressProps, "variant"> & {
  color?: RestrictedColor;
};

export const CircularProgress = forwardRef(
  (props: CircularProgressProps, ref) => {
    const { ...otherProps } = props;

    const MyComponent = useMemo(
      () => extendVariants(HeroUICircularProgress, {}),
      []
    );

    return <MyComponent {...otherProps} color="default" ref={ref} />;
  }
) as (props: RestrictedProps) => ReactElement;
