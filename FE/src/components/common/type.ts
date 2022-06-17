import type { FontSizeType, ColorType, FontWeightType } from "styled-components";

export type StyleProps = {
  width?: number;
  height?: number;
  fontSize?: keyof FontSizeType;
  fontWeight?: keyof FontWeightType;
  color?: keyof ColorType;
  backgroundColor?: keyof ColorType;
  style?: React.CSSProperties;
};
