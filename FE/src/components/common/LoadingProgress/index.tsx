import { useState } from "react";
import styled from "styled-components";

import { COLOR } from "@/styles/constTheme";

function LoadingProgress() {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const loadingDone = { width: "100vw" };
    setStyle(loadingDone);
  }, 0);

  return <ProgressBlock style={style}></ProgressBlock>;
}

export default LoadingProgress;

const ProgressBlock = styled.span`
  width: 0vw;
  height: 8rem;
  left: 0;
  top: 0;
  position: fixed;
  background-color: ${COLOR["blue-400"]};
  outline: 2rem solid transparent;
  transition: 1s cubic-bezier(0.79, 0.04, 0.09, 1.11) 0.1s;
`;
