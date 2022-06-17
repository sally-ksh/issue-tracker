import type { ColorType, DefaultTheme, FontSizeType, FontWeightType, LayoutType } from "styled-components";

export const FONT_SIZE: FontSizeType = {
  XS: 12,
  S: 14,
  M: 16,
  L: 18,
  XL: 20,
  XXL: 48,
};

export const FONT_WEIGHT: FontWeightType = {
  base: 400,
  bold: 700,
};

export const COLOR: ColorType = {
  "white-400": "#FEFEFE",

  "gray-100": "#F7F7FC",
  "gray-400": "#EFF0F6",
  "gray-500": "#D9DBE9",
  "gray-700": "#A0A3BD",
  "gray-900": "#6E7191",

  "black-400": "#14142B",

  "blue-100": "#C7EBFF",
  "blue-400": "#007AFF",
  "blue-700": "#004DE3",

  "red-400": "#FF3B30",
};

export const LAYOUT: LayoutType = {
  width: 1440,
  height: 640,
};

// TODO darkMode 미구현

export const lightTheme: DefaultTheme = {
  primary: "#f45511",
  text: COLOR["black-400"],
  background: COLOR["gray-100"],
};

export const darkTheme: DefaultTheme = {
  primary: "",
  text: "",
  background: "",
};

export const theme = lightTheme;
