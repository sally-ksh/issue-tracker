import * as S from "@/components/common/FilterButton/style";
import { StyleProps } from "@/components/common/type";

export type FilterButtonProps = {
  text?: string;
  image?: string;
  isImageFirst?: boolean;
  state?: number | string;
} & StyleProps;

const FilterButton = ({ text, image, isImageFirst, state, ...props }: FilterButtonProps) => {
  return (
    <S.FilterButton {...props}>
      {isImageFirst ? (
        <>
          {image ? <img src={image} /> : null}
          <span>{text}</span>
        </>
      ) : (
        <>
          <span>{text}</span>
          {image ? <img src={image} /> : null}
        </>
      )}
      {state ? <span>{state}</span> : null}
    </S.FilterButton>
  );
};

export default FilterButton;
