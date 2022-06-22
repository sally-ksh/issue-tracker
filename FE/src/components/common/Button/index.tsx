import * as S from "@/components/common/Button/style";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  width?: number;
  fontSize?: number;
  backgroundColor?: string;
  color?: string;
};

const Button = ({ children, onClick, width, fontSize, backgroundColor, color }: ButtonProps) => {
  return (
    <S.Button width={width} onClick={onClick} fontSize={fontSize} backgroundColor={backgroundColor} color={color}>
      {children}
    </S.Button>
  );
};

export default Button;
