import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    fontSize: {
      XS: "12rem";
      S: "14rem";
      M: "16rem";
      L: "18rem";
      XL: "20rem";
      XXL: "48rem";
    };

    fontWeight: {
      base: 400;
      bold: 700;
    };

    color: {
      white: {
        400: "#FEFEFE";
      };
      gray: {
        100: "#F7F7FC";
        400: "#EFF0F6";
        700: "#A0A3BD";
        900: "#6E7191";
      };
      black: {
        400: "#14142B";
      };
      blue: {
        100: "#C7EBFF";
        400: "#007AFF";
        700: "#004DE3";
      };
      red: {
        400: "#FF3B30";
      };
    };

    iconSize: {
      small: "12rem";
      star: "16rem";
      base: "24rem";
      large: "30rem";
      account: "76rem";
    };

    layout: {
      width: "1440rem";
      height: "640rem";
    };
  }
}

// 강한 타입 추론용 인터페이스

// declare module "styled-components" {
//   export interface DefaultTheme {
//     fontSize: {
//       smaller: "12px";
//       small: "14px";
//       base: "16px";
//       large: "18px";
//       larger: "20px";
//       logo: "48px";
//     };

//     fontWeight: {
//       base: 400;
//       bold: 700;
//     };

//     color: {
//       black: "#010101";
//       white: "#FFFFFF";
//       gray6: "#F5F5F7";
//       gray5: "#E0E0E0";
//       gray4: "#BDBDBD";
//       gray3: "#828282";
//       gray2: "#4F4F4F";
//       gray1: "#333333";
//       pink: "#E84C60";
//       green: "#E84C60";
//     };

//     iconSize: {
//       small: "12px";
//       base: "24px";
//       large: "30px";
//       account: "76px";
//       star: "16px";
//     };

//     layout: {
//       heroImgWidth: "1440px";
//       heroImgHeight: "640px";
//     };
//   }
// }
