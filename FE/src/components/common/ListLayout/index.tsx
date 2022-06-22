import * as S from "@/components/common/ListLayout/style";

export type ListLayoutProps = {
  width: number;
  titleComponent?: JSX.Element;
  listComponents?: JSX.Element[];
};

const ListLayout = ({ width, titleComponent, listComponents }: ListLayoutProps) => {
  const listTitle = <S.ListBox>{titleComponent}</S.ListBox>;
  const listItem = listComponents?.map((el, idx) => <S.ListBox key={idx}>{el}</S.ListBox>);

  return (
    <S.ListLayout width={width}>
      {listTitle}
      {listItem}
    </S.ListLayout>
  );
};

export default ListLayout;
