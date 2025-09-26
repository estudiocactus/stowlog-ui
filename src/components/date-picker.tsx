import {
  DatePicker as HeroUIDatePicker,
  DatePickerProps,
  extendVariants,
  forwardRef
} from "@heroui/react";
import { ReactElement, useMemo } from "react";

type RestrictedDatePickerProps = Omit<DatePickerProps, "variant"> & {};

export const DatePicker = forwardRef(
  (props: RestrictedDatePickerProps, ref) => {
    const { ...otherProps } = props;

    const MyComponent = useMemo(
      () =>
        extendVariants(HeroUIDatePicker, {
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
  }
) as (props: RestrictedDatePickerProps) => ReactElement;
