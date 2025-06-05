import { EstudioCactus } from "@/logos/estudio-cactus";
import { EstudioCactusIcon } from "@/logos/estudio-cactus-icon";
import { RiskAssessment } from "@/logos/risk-assessment";
import { RiskAssessmentIcon } from "@/logos/risk-assessment-icon";
import { Stowlog } from "@/logos/stowlog";
import { StowlogIcon } from "@/logos/stowlog-icon";
import React from "react";

type LogoName = "stowlog" | "estudioCactus" | "riskAssessment";
type Color = "dark" | "light" | "original";

const LogoMap: {
  [key in LogoName]?: {
    component: React.ElementType;
    icon: React.ElementType;
  };
} = {
  estudioCactus: {
    icon: EstudioCactusIcon,
    component: EstudioCactus,
  },
  stowlog: {
    icon: StowlogIcon,
    component: Stowlog,
  },
  riskAssessment: {
    icon: RiskAssessmentIcon,
    component: RiskAssessment,
  },
};

export const Logo = ({
  name,
  width,
  height,
  color,
  isIconOnly = false,
}: {
  name: LogoName;
  width?: number;
  height?: number;
  color?: Color;
  isIconOnly?: boolean;
}) => {
  if (!LogoMap[name]) {
    return null;
  }

  let IconComponent = LogoMap[name]!.component;
  if (isIconOnly) {
    IconComponent = LogoMap[name]!.icon;
  }

  let fill = undefined;
  if (color === "dark") {
    fill = "#27393E";
  }
  if (color === "light") {
    fill = "#fff";
  }

  return (
    <div>
      <IconComponent
        width={width || "100%"}
        height={height || "100%"}
        fill={fill}
      />
    </div>
  );
};
