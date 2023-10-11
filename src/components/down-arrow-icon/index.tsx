import React from "react";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  className?: string;
  fill?: string;
}

const DownArrowIcon: React.FC<IProps> = (props) => {
  const { className, fill = "#333" } = props;
  return (
    <svg
      width="8"
      height="4"
      viewBox="0 0 8 4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon fill={fill} fillRule="evenodd" points="0 0 4 4 8 0" />
    </svg>
  );
};

export default DownArrowIcon;
