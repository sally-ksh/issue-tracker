import { ReactElement, ReactSVGElement } from "react";
import styled from "styled-components";

import { ReactComponent as Alertcircle } from "@/assets/AlertCircle.svg";
import { ReactComponent as Archive } from "@/assets/Archive.svg";
import { ReactComponent as Arrowdown } from "@/assets/ArrowDown.svg";
import { ReactComponent as Label } from "@/assets/Label.svg";
import { ReactComponent as Milestone } from "@/assets/Milestone.svg";
import { ReactComponent as Plus } from "@/assets/Plus.svg";
import { ReactComponent as Searchicon } from "@/assets/SearchIcon.svg";
import { ReactComponent as Usericon } from "@/assets/UserIcon.svg";
import { COLOR } from "@/styles/constTheme";

type IconProps = {
  type: keyof typeof SVGIcon;
  color?: COLOR;
} & React.SVGAttributes<SVGSVGElement>;

const SVGIcon = {
  alertCircle: Alertcircle,
  archive: Archive,
  arrowDown: Arrowdown,
  label: Label,
  milestone: Milestone,
  plus: Plus,
  searchIcon: Searchicon,
  userIcon: Usericon,
};

const Icon = ({ type, color, ...rest }: IconProps) => {
  const IconComponent = SVGIcon[type] as React.FC<React.SVGProps<SVGSVGElement>>;
  const StyledIconComponent = styled(IconComponent)`
    svg {
      stroke: ${color || COLOR["gray-900"]};
    }
  `;
  return <IconComponent stroke={color || COLOR["gray-900"]} {...rest} />;
};

export default Icon;
