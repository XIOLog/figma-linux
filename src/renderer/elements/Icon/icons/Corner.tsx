import * as React from "react";

import { IconProps } from "..";
import "../index.scss";

export const Corner: React.SFC<IconProps> = props => {
  const size = props.size ? props.size : "16";

  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6.48529L6.65685 12.1421L12.3137 6.48529" stroke={props.color ? props.color : "#333333"} />
    </svg>
  );
};