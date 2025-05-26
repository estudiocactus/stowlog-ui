import { icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: string | number;
  className?: string;
}

export const Icon = ({ name, color, size, className }: IconProps) => {
  const IconComponent = icons[name as keyof typeof icons];

  if (!IconComponent) {
    console.error(`LucideIcon: No icon found for the name '${name}'`);
    return null;
  }

  return <IconComponent color={color} size={size} className={className} />;
};
