import { useState } from "react";

import { AccountImg } from "@/components/common/AccountImg";
import DropdownMenu from "@/components/common/DropdownMenu";
import Icon from "@/components/common/Icon";

import * as S from "./style";

const WriterFilter = () => {
  const [issueFilter, setIssueFilter] = useState(null);

  const FilterListTemplate = [
    { name: "Jwu", accountImage: "https://avatars.githubusercontent.com/u/72546335?v=4" },
    { name: "Sally", accountImage: "https://avatars.githubusercontent.com/u/96989782?v=4" },
    { name: "Oliver", accountImage: "https://avatars.githubusercontent.com/u/84956036?v=4" },
  ];

  const FilterButton = (
    <>
      <span>작성자</span>
      <Icon type="arrowDown" />
    </>
  );

  const FilterTitle = <S.FilterTitle>작성자 필터</S.FilterTitle>;

  const FilterListComponents = FilterListTemplate?.map(({ name, accountImage }, idx) => {
    const handleClickFilter = () => {};

    return (
      <S.FilterList key={idx} onClick={handleClickFilter}>
        <S.FrontBox>
          {accountImage && <AccountImg src={accountImage} />}
          <span>{name}</span>
        </S.FrontBox>
        {issueFilter ? <Icon type="checkRadioButton" /> : <Icon type="emptyRadioButton" />}
      </S.FilterList>
    );
  });

  return (
    <DropdownMenu
      buttonComponent={FilterButton}
      titleComponent={FilterTitle}
      listComponents={FilterListComponents}
      buttonWidth={80}
      dropdownWidth={240}
    />
  );
};

export default WriterFilter;
