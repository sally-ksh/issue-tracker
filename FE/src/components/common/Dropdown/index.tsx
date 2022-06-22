import { ChildrenProps } from "@/components/common/type";

import * as S from "./style";

const Dropdown = ({ children }: ChildrenProps) => {
  return <S.Dropdown>{children}</S.Dropdown>;
};

export default Dropdown;
