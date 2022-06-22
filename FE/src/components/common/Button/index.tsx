import * as S from "@/components/common/Button/style";

export type ButtonProps = {
  value?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  width?: number;
  fontSize?: number;
  backgroundColor?: string;
  color?: string;
};

const Button = ({ value, onClick, width, fontSize, backgroundColor, color }: ButtonProps) => {
  return (
    <S.Button width={width} onClick={onClick} fontSize={fontSize} backgroundColor={backgroundColor} color={color}>
      {value}
    </S.Button>
  );
};

export default Button;
