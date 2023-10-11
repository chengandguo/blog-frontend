import React from "react";
import cx from "@/utils/classnames";
import SwitchItem from "./switch-item";
import "./index.scss";

interface IProps {
  containerClassName?: string;
  listClassName?: string;
  activeIndex?: number;
  onChange?: (activeIndex: number) => void;
  children?: React.ReactNode;
}

const SwitchList: React.FC<IProps> = (props) => {
  const {
    containerClassName,
    listClassName,
    children,
    activeIndex = 0,
  } = props;
  const filteredChildren = React.Children.toArray(children).filter((child) => {
    return child?.type && child?.type?.name === "SwitchItem";
  });

  const style = {
    transform: `translateX(${-100 * activeIndex}%)`,
  };
  console.log(style);
  return (
    <div className={cx("i-switch-container", containerClassName)}>
      <ul className={cx("i-switch-list", listClassName)} style={style}>
        {filteredChildren}
      </ul>
    </div>
  );
};

SwitchList.SwitchItem = SwitchItem;

export default SwitchList;
