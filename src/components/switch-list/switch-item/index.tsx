import React from "react";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const SwitchItem: React.FC<IProps> = (props) => {
  const { className, children } = props;

  return <li className={cx("i-switch-item", className)}>{children}</li>;
};

export default SwitchItem;
