import * as S from "@/components/common/Button/style";

export type ButtonProps = {
  component?: JSX.Element;
  width: string;
  height: string;
  fill?: string;
};

const Button = ({ component, width, height, fill }: ButtonProps) => {
  return (
    <S.ButtonBox width={width} height={height} fill={fill}>
      {component}
    </S.ButtonBox>
  );
};

export default Button;
