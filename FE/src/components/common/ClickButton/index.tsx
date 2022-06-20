import { ButtonHTMLAttributes } from "react";

import { StyleProps } from "@/components/common/type";

import * as S from "./style";

export type ClickButtonProps = {
  text?: string;
  svgIcon?: JSX.Element;
  isIconFirst?: boolean;
  state?: number | string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
} & StyleProps;

const ClickButton = ({ text, svgIcon, isIconFirst, state, onClick, ...props }: ClickButtonProps) => {
  return (
    <S.ClickButton onClick={onClick} {...props}>
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
    </S.ClickButton>
  );
};

export default ClickButton;
