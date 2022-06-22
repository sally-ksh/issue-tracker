import Button from "@/components/common/Button";

const ButtonTest = () => {
  const onClickHandler = () => {};

  return (
    <>
      <h1>Button Test page</h1>
      <br />
      <Button value="확인" onClick={onClickHandler} />
      <br />
      <br />
      <Button value="추가" onClick={onClickHandler} width={150} />
      <br />
      <br />
      <Button value="등록" onClick={onClickHandler} width={150} fontSize={18} />
      <br />
      <br />
      <Button value="취소" onClick={onClickHandler} width={150} fontSize={18} backgroundColor="white" color="blue" />
      <br />
      <br />
      <Button value="닫기" onClick={onClickHandler} width={150} fontSize={18} backgroundColor="white" color="blue" />
    </>
  );
};

export default ButtonTest;
