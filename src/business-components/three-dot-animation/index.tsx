import React from "react";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  className?: string;
}

const ThreeDotAnimation: React.FC<IProps> = (props) => {
  const { className } = props;
  return <span className={cx("i-dotting", className)}></span>;
};

export default ThreeDotAnimation;
