import {
  DateRangePicker as HeroUIDatePicker,
  DateRangePickerProps,
} from "@heroui/date-picker";
import { extendVariants, forwardRef } from "@heroui/system";
import { ReactElement, useMemo } from "react";

type RestrictedDatePickerProps = Omit<DateRangePickerProps, "variant"> & {};

export const DateRangePicker = forwardRef(
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
