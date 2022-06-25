import { ChangeEvent, useState } from "react";

import * as S from "./style";

const CheckBox = ({ ...rest }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClickChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsChecked(e.target.checked);
  };

  return <S.Input type="checkbox" checked={isChecked} onChange={handleClickChecked} {...rest} />;
};

export default CheckBox;
