import { ReactNode } from "react";

import { COLOR, FONTSIZE, FONTWEIGHT } from "@/styles/constTheme";

export type StyleProps = {
  width?: number;
  height?: number;
  fontSize?: FONTSIZE;
  fontWeight?: FONTWEIGHT;
  color?: COLOR;
  backgroundColor?: COLOR;
  style?: React.CSSProperties;
};

export type ChildrenProps = {
  children: ReactNode;
};
