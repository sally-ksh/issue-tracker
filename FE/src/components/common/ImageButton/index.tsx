import * as S from "@/components/common/ImageButton/style";

export type ImageButtonProps = {
  image: string;
  width: number;
  height: number;
};

const ImageButton = ({ image, width, height }: ImageButtonProps) => {
  return <S.ImageButton image={image} width={width} height={height} />;
};

export default ImageButton;
