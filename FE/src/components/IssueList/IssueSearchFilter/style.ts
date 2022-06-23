import styled from "styled-components";

import { COLOR, FONTSIZE } from "@/styles/constTheme";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${COLOR["gray-500"]};
  border-radius: 11rem;
  width: 600rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 472rem;
  padding-left: 26rem;
  height: 40rem;
  gap: 10rem;
  border: 1rem solid ${COLOR["gray-500"]};
  border-bottom-right-radius: 11rem;
  border-top-right-radius: 11rem;
  background-color: ${COLOR["gray-400"]};
`;

export const IssueFilterList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${COLOR["blue-100"]};
  z-index: 1;

  filter: grayscale(100%);

  :hover {
    filter: grayscale(0%);
  }
`;

export const Title = styled.div`
  font-size: ${FONTSIZE.L};
`;
