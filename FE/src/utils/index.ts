import { COLOR } from "@/styles/constTheme";

export const getTextColorByBackgroundColor = (hexColor: string) => {
  const colorString = hexColor.slice(1); // 색상 앞의 # 제거
  const rgb = parseInt(colorString, 16); // rrggbb를 10진수로 변환

  const r = (rgb >> 16) & 0xff; // red 추출
  const g = (rgb >> 8) & 0xff; // green 추출
  const b = (rgb >> 0) & 0xff; // blue 추출

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  // 색상 선택
  return luma < 127.5 ? COLOR["white-400"] : COLOR["black-400"]; // 글자색이
};

export const getDifferenceTodayToSelectTime = (selectTimeString: string) => {
  const todayTime = new Date().getTime();
  const selectTime = new Date(selectTimeString).getTime();
  const timeDifference = Math.abs(todayTime - selectTime);

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  switch (true) {
    case seconds < 60:
      return `방금 전`;

    case minutes < 60:
      return `${minutes}분 전`;

    case hours < 24:
      return `${hours}시간 전`;

    default:
      return `${days}일 전`;
  }
};

export const timeStampInfoTemplate = (createdAtTime: string, author: string) =>
  `이 이슈가 ${getDifferenceTodayToSelectTime(createdAtTime)}, ${author}님에 의해 작성되었습니다`;
