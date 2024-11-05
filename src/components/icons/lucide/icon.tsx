import React from 'react';
import { icons } from 'lucide-react';

interface IconProps {
  name: keyof typeof icons;
  color?: string;
  size?: string | number;
  className?: string;
}

export const LucideIcon = ({ name, color, size, className }: IconProps) => {
  const IconComponent = icons[name as keyof typeof icons];  // Get the icon component

  // Add a check if the icon exists
  if (!IconComponent) {
    console.error(`LucideIcon: No icon found for the name '${name}'`);
    return null;  // Return null if the icon is not found to avoid the error
  }

  // Render the icon if found
  return <IconComponent color={color} size={size} className={className} />;
};
