// eslint-disable-next-line import/named
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  fontSize: {
    XS: "12rem",
    S: "14rem",
    M: "16rem",
    L: "18rem",
    XL: "20rem",
    XXL: "48rem",
  },

  fontWeight: {
    base: 400,
    bold: 700,
  },

  color: {
    white: {
      400: "#FEFEFE",
    },
    gray: {
      100: "#F7F7FC",
      400: "#EFF0F6",
      700: "#A0A3BD",
      900: "#6E7191",
    },
    black: {
      400: "#14142B",
    },
    blue: {
      100: "#C7EBFF",
      400: "#007AFF",
      700: "#004DE3",
    },
    red: {
      400: "#FF3B30",
    },
  },

  iconSize: {
    small: "12rem",
    star: "16rem",
    base: "24rem",
    large: "30rem",
    account: "76rem",
  },

  layout: {
    width: "1440rem",
    height: "640rem",
  },
};

export { theme };
