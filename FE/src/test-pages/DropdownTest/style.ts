import styled from "styled-components";

import { COLOR } from "@/styles/constTheme";

export const DropdownMenuTitle = styled.div`
  font-size: 18rem;
`;

export const DropdownMenuItemBox = styled.li`
  font-size: 16rem;
  color: ${COLOR["gray-900"]};
  display: flex;
  justify-content: space-between;
`;

export const ButtonBox = styled.div`
  width: 500rem;
  height: 50rem;
  border: 1px solid lightblue;
  display: flex;
  justify-content: space-around;
`;
