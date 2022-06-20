import * as S from "@/components/common/ClickButton/style";
import { StyleProps } from "@/components/common/type";
import { COLOR } from "@/styles/constTheme";

export type ClickButtonProps = {
  text?: string;
  svgIcon?: JSX.Element;
  isIconFirst?: boolean;
  state?: number | string;
} & StyleProps;

const ClickButton = ({ text, svgIcon, isIconFirst, state, ...props }: ClickButtonProps) => {
  return (
    <S.ClickButton {...props}>
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
