import { COLOR } from "@/styles/constTheme";

// TODO 다크모드 필요한 색만 구현 예정

export const lightTheme = {
  primary: "#f45511",
  text: COLOR["black-400"],
  background: COLOR["gray-100"],
} as const;

export const darkTheme = {
  primary: "",
  text: "",
  background: "",
} as const;

export const theme = lightTheme;
