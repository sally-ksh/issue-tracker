import { useState } from "react";

import styled from "styled-components";

import { COLOR } from "@/styles/constTheme";

function LoadingProgress() {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const loadingDone = { width: "100vw" };
    setStyle(loadingDone);
  }, 0);

  return (
    <ProgressBlock style={style}>
      <div>LOADING</div>
    </ProgressBlock>
  );
}

export default LoadingProgress;

const ProgressBlock = styled.div`
  width: 0vw;
  left: 0;
  top: 0;
  position: fixed;
  margin: 0 auto;
  background-color: ${COLOR["blue-400"]};
  text-indent: 9999rem;
  transition: 0.5s ease 0.3s;
`;
