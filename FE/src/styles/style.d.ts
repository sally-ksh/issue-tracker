import { lightTheme } from "./colorTheme";
declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    text: string;
    background: string;
  }
}
