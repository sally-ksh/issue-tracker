import * as S from "@/components/common/FilterButton/style";

import type { FontSizeType, ColorType, FontWeightType } from "styled-components";

export type FilterButtonProps = {
  text?: string;
  width: string;
  height: string;
  image?: string;
  fontSize?: keyof FontSizeType;
  fontWeight?: keyof FontWeightType;
  color?: keyof ColorType;
};

const FilterButton = ({ text, image, width, height, fontSize, fontWeight, color }: FilterButtonProps) => {
  return (
    <S.FilterButton width={width} height={height} fontSize={fontSize} fontWeight={fontWeight} color={color}>
      <span>{text}</span>
      {image ? <img src={image}></img> : null}
    </S.FilterButton>
  );
};

export default FilterButton;
