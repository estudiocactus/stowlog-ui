import { extendVariants, forwardRef, Table as HeroUITable, TableProps, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { ReactElement, useMemo } from "react";

export const Table = forwardRef((props: TableProps, ref) => {
  const { ...otherProps } = props;

  const MyComponent = useMemo(
    () =>
      extendVariants(HeroUITable, {
        variants: {
          shadow: {
            none: {
              wrapper: "border",
            },
          },
        },
        defaultVariants: {
          shadow: "none",
        },
      }),
    []
  );

  return (
    <MyComponent {...otherProps} shadow="none" radius={undefined} ref={ref} />
  );
}) as (props: TableProps) => ReactElement;

export {
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
};
