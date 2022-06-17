import type { FontSizeType, ColorType, FontWeightType } from "styled-components";

export type StyleProps = {
  width?: string;
  height?: string;
  fontSize?: keyof FontSizeType;
  fontWeight?: keyof FontWeightType;
  color?: keyof ColorType;
  backgroundColor?: keyof ColorType;
  style?: React.CSSProperties;
};
