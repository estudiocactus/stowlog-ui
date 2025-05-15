import { extendVariants, forwardRef } from '@heroui/system'
import { Table as HeroUITable, TableProps } from '@heroui/table'
import { ReactElement } from 'react'

export const Table = forwardRef((props: TableProps, ref) => {
  const { ...otherProps } = props

  const MyComponent = extendVariants(HeroUITable, {
    variants: {
      shadow: {
        none: {
          wrapper: 'border'
        }
      }
    },
    defaultVariants: {
      shadow: 'none'
    }
  })

  return (
    <MyComponent {...otherProps} shadow="none" radius={undefined} ref={ref} />
  )
}) as (props: TableProps) => ReactElement

export {
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@heroui/table'
