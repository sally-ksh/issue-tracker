import { COLOR } from "@/styles/constTheme";

import * as S from "./style";

export type LabelProps = {
  name: string;
  backgroundColor: string;
};

const Label = ({ name, backgroundColor, ...rest }: LabelProps) => {
  return (
    <S.Label backgroundColor={backgroundColor} {...rest}>
      {name}
    </S.Label>
  );
};

export default Label;
