import Button from "@/components/common/Button";
import Icon from "@/components/common/Icon";
import { COLOR } from "@/styles/constTheme";

const ButtonTest = () => {
  const onClickHandler = () => {};

  return (
    <>
      <h1>Button Test page</h1>
      <br />
      <Button onClick={onClickHandler}>확인</Button>
      <br />
      <br />
      <Button onClick={onClickHandler} width={150}>
        추가
        <Icon type="arrowDown" strokecolor={COLOR["white-400"]} />
      </Button>
      <br />
      <br />
      <Button onClick={onClickHandler} width={150} fontSize={18}>
        등록
      </Button>
      <br />
      <br />
      <Button onClick={onClickHandler} width={150} fontSize={18} backgroundColor="white" color="blue">
        취소
      </Button>
      <br />
      <br />
      <Button onClick={onClickHandler} width={150} fontSize={18} backgroundColor="white" color="blue">
        닫기
      </Button>
    </>
  );
};

export default ButtonTest;
