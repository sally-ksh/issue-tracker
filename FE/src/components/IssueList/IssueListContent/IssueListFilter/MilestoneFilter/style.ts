import styled from "styled-components";

import { COLOR, FONTSIZE } from "@/styles/constTheme";

export const FilterList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${COLOR["gray-950"]};
`;

export const FilterTitle = styled.div`
  color: ${COLOR["black-400"]};
  font-size: ${FONTSIZE.L}rem;
`;
