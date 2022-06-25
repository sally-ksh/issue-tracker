import { useState } from "react";

import * as S from "@/components/common/DropdownMenu/style";
import ListLayout from "@/components/common/ListLayout";
import useComponentVisible from "@/hooks/useComponentVisible";

export type DropdownMenuProps = {
  buttonComponent: JSX.Element | string;
  titleComponent: JSX.Element;
  listComponents: JSX.Element[];
  dropdownWidth: number;
  buttonWidth?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const DropdownMenu = ({
  buttonComponent,
  titleComponent,
  listComponents,
  dropdownWidth,
  buttonWidth,
}: DropdownMenuProps) => {
  const { ref, isVisible, setIsVisible } = useComponentVisible(false);
  const [isBtnOnLeftSide, setIsBtnOnLeftSide] = useState(true);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsVisible((prev) => !prev);
    const isOnLeftSide = event.pageX < window.innerWidth / 2;
    setIsBtnOnLeftSide(isOnLeftSide);
  };

  return (
    <S.DropdownMenuBox ref={ref}>
      <S.DropdownMenuBtn onClick={onClickHandler} buttonWidth={buttonWidth}>
        {buttonComponent}
      </S.DropdownMenuBtn>
      <S.DropdownMenuListBox isVisible={isVisible} isBtnOnLeftSide={isBtnOnLeftSide}>
        {isVisible && (
          <ListLayout width={dropdownWidth} titleComponent={titleComponent} listComponents={listComponents} />
        )}
      </S.DropdownMenuListBox>
    </S.DropdownMenuBox>
  );
};

export default DropdownMenu;
