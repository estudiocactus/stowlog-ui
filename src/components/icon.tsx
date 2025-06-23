import { icons, LucideProps } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconComponent = icons[name as keyof typeof icons];

  if (!IconComponent) {
    console.error(`LucideIcon: No icon found for the name '${name}'`);
    return null;
  }

  return <IconComponent {...props} />;
};
