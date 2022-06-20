import { useState } from "react";

import styled from "styled-components";

import Portal from "@/components/common/Portal";
import { COLOR } from "@/styles/constTheme";

function LoadingProgress() {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const loadingDone = { width: "100%" };
    setStyle(loadingDone);
  }, 0);

  return (
    <Portal>
      <ProgressBlock style={style}>
        <div>LOADING</div>
      </ProgressBlock>
    </Portal>
  );
}

export default LoadingProgress;

const ProgressBlock = styled.div`
  width: 0%;
  position: absolute;
  margin: 0 auto;
  background-color: ${COLOR["blue-400"]};
  text-indent: 9999px;
  transition: 0.5s ease 0.3s;
`;
