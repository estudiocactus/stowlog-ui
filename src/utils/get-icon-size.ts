export const getIconSize = (size: 'sm' | 'md' | 'lg' | undefined) => {
  switch (size) {
    case 'sm':
      return 16
    case 'md':
      return 20
    case 'lg':
      return 22
    default:
      return 20
  }
}
