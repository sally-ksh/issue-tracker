import FilterButton from "@/components/common/FilterButton";
import Icon from "@/components/common/Icon";
import { COLOR, FONTSIZE, FONTWEIGHT } from "@/styles/constTheme";

import * as S from "./style";

const IssueRedirectOptionBox = () => {
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

      <FilterButton
        text="이슈 작성"
        svgIcon={<Icon type="plus" />}
        fontSize={FONTSIZE.XS}
        isIconFirst={true}
        width={120}
        height={40}
        backgroundColor={COLOR["blue-400"]}
        color={COLOR["white-400"]}
        style={{ justifyContent: "center", gap: "9rem" }}
      />
    </S.Container>
  );
};

export default IssueRedirectOptionBox;
