import Button from "@/components/common/Button";
import FilterButton from "@/components/common/FilterButton";
import Icon from "@/components/common/Icon";
import { COLOR, FONTSIZE, FONTWEIGHT } from "@/styles/constTheme";

import * as S from "./style";

const IssueRedirectOptionBox = () => {
  const handleClick = () => {};
  return (
    <S.Container>
      <S.OptionTab>
        <FilterButton
          text="레이블"
          svgIcon={<Icon type="label" />}
          isIconFirst={true}
          width={160}
          height={40}
          fontWeight={FONTWEIGHT.bold}
          color={COLOR["gray-900"]}
          state={"(3)"}
        />
        <FilterButton
          text="마일스톤"
          svgIcon={<Icon type="milestone" />}
          isIconFirst={true}
          width={160}
          height={40}
          fontWeight={FONTWEIGHT.bold}
          color={COLOR["gray-900"]}
          state={"(3)"}
        />
      </S.OptionTab>

      <Button onClick={handleClick} width={120} fontSize={FONTSIZE.XS}>
        <Icon type="plus" />
        이슈 작성
      </Button>
    </S.Container>
  );
};

export default IssueRedirectOptionBox;
