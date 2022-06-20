import { FONTSIZE, FONTWEIGHT, COLOR } from "@/styles/constTheme";

type StyledFontProps = {
  fontSize?: FONTSIZE;
  fontWeight?: FONTWEIGHT;
  color?: COLOR;
};

export const styledFont = ({
  fontSize = FONTSIZE.M,
  fontWeight = FONTWEIGHT.base,
  color = COLOR["black-400"],
}: StyledFontProps) => {
  let styledTemplate = "";

  styledTemplate += fontSize && `font-size: ${fontSize}rem;\n`;
  styledTemplate += fontWeight && `font-weight: ${fontWeight};\n`;
  styledTemplate += color && `color: ${color};\n`;

  return styledTemplate;
};
