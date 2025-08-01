import { EstudioCactus } from "@/logos/estudio-cactus";
import { EstudioCactusIcon } from "@/logos/estudio-cactus-icon";
import { RiskAssessment } from "@/logos/risk-assessment";
import { RiskAssessmentIcon } from "@/logos/risk-assessment-icon";
import { SafetyInduction } from "@/logos/safety-induction";
import { SafetyInductionIcon } from "@/logos/safety-induction-icon";
import { Stowlog } from "@/logos/stowlog";
import { StowlogIcon } from "@/logos/stowlog-icon";
import { Training } from "@/logos/training";
import { TrainingIcon } from "@/logos/training-icon";
import React from "react";

type LogoName =
  | "stowlog"
  | "estudioCactus"
  | "riskAssessment"
  | "safetyInduction"
  | "training";
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
  safetyInduction: {
    icon: SafetyInductionIcon,
    component: SafetyInduction,
  },
  training: {
    icon: TrainingIcon,
    component: Training,
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
