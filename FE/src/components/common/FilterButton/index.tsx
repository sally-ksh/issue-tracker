import { ButtonHTMLAttributes } from "react";

import { StyleProps } from "@/components/common/type";

import * as S from "./style";

export type FilterButtonProps = {
  text?: string;
  svgIcon?: JSX.Element;
  isIconFirst?: boolean;
  state?: number | string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
} & StyleProps;

const FilterButton = ({ text, svgIcon, isIconFirst, state, onClick, ...props }: FilterButtonProps) => {
  return (
    <S.FilterButton onClick={onClick} {...props}>
      {isIconFirst ? (
        <>
          {svgIcon ? svgIcon : null}
          <span>{text}</span>
        </>
      ) : (
        <>
          <span>{text}</span>
          {svgIcon ? svgIcon : null}
        </>
      )}
      {state ? <span>{state}</span> : null}
    </S.FilterButton>
  );
};

export default FilterButton;
