import SVG from "react-inlinesvg";
import styled from "styled-components";

import Alertcircle from "@/assets/AlertCircle.svg";
import Archive from "@/assets/Archive.svg";
import Arrowdown from "@/assets/ArrowDown.svg";
import CheckRadioButton from "@/assets/CheckRadioButton.svg";
import EmptyRadioButton from "@/assets/EmptyRadioButton.svg";
import Label from "@/assets/Label.svg";
import Milestone from "@/assets/Milestone.svg";
import Plus from "@/assets/Plus.svg";
import Searchicon from "@/assets/SearchIcon.svg";
import Usericon from "@/assets/UserIcon.svg";
import { COLOR } from "@/styles/constTheme";

type IconProps = {
  type: keyof typeof SVGpath;
  color?: COLOR;
};

const SVGpath = {
  alertCircle: Alertcircle,
  archive: Archive,
  arrowDown: Arrowdown,
  label: Label,
  milestone: Milestone,
  plus: Plus,
  searchIcon: Searchicon,
  userIcon: Usericon,
  emptyRadioButton: EmptyRadioButton,
  checkRadioButton: CheckRadioButton,
};

const Icon = ({ type, color, ...rest }: IconProps) => {
  return <StyledSVGIcon src={SVGpath[type]} color={color} {...rest} />;
};

const StyledSVGIcon = styled(SVG)<Pick<IconProps, "color">>`
  path {
    stroke: ${({ color }) => color || COLOR["gray-900"]};
  }
`;

export default Icon;
