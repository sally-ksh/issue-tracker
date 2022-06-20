import { COLOR, FONTSIZE, FONTWEIGHT } from "@/styles/constTheme";

// type FontSizeTypes<T> = Record<of T, T>;

export type StyleProps = {
  width?: number;
  height?: number;
  fontSize?: FONTSIZE;
  fontWeight?: FONTWEIGHT;
  color?: COLOR;
  backgroundColor?: COLOR;
  style?: React.CSSProperties;
};
