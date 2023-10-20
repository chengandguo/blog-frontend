import React from "react";
import cx from "@/utils/classnames";
import RightTickIcon from "@/components/right-tick-icon";
import { HEADER_LIST, HeaderItemType } from "../constants";
import "./index.scss";

interface IProps {
  className?: string;

  selectedHeader: string; // 当前选中的标题

  onChange: (selectedHeader: HeaderItemType, event: React.MouseEvent) => void;
}

const HeaderPopoverSelector: React.FC<IProps> = (props) => {
  const { selectedHeader, onChange } = props;

  const handleSelectHeader = (
    value: HeaderItemType,
    event: React.MouseEvent
  ) => {
    event.preventDefault();
    typeof onChange === "function" && onChange(value, event);
  };

  return (
    <div className="header-popover-selector">
      <ul className="header-list">
        {HEADER_LIST.map((item, index) => (
          <li
            key={index}
            className="header-item"
            onMouseDown={(event) => handleSelectHeader(item, event)}
          >
            <span
              className="header-item-label"
              style={{ fontSize: item.fontSize }}
            >
              {item.label}
            </span>
            {selectedHeader === item.value && <RightTickIcon />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderPopoverSelector;
