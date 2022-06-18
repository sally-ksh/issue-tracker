import { COLOR } from "@/styles/constTheme";

// TODO darkMode 미구현

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
