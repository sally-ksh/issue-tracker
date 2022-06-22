import ListLayout from "@/components/common/ListLayout";
import * as S from "@/test-pages/ListLayoutTest/style";

const ListLayoutTest = () => {
  const dataFromServer = ["ListLayout", "ListLayout", "ListLayout", "ListLayout"];

  const TitleComponent = (
    <S.ListTitleBox>
      <input type="checkbox" />
      <span>dd</span>
    </S.ListTitleBox>
  );

  const ListComponents = dataFromServer?.map((el, idx) => {
    return <S.ListItemBox key={idx}>{el}</S.ListItemBox>;
  });

  return (
    <>
      <h1>ListLayout Test page</h1>
      <br />
      <ListLayout width={400} titleComponent={TitleComponent} listComponents={ListComponents} />
    </>
  );
};

export default ListLayoutTest;
