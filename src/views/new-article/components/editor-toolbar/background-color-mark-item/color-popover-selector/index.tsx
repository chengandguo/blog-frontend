import React, { useState, useId } from "react";
import cx from "@/utils/classnames";
import ClearColorIcon from "../clear-color-icon";
import AddIcon from "../add-color-icon";
import { DEFAULT_COLOR_LIST } from "./constants";
import "./index.scss";

interface IProps {
  className?: string;

  selectedColor: string; // 当前字体的颜色

  onChange: (selectedColor: string, event: React.MouseEvent) => void;
}

interface ColorItem {
  label?: string;
  value: string;
  selected: boolean;
}

type ColorList = Array<ColorItem>;

const ColorPopoverSelector: React.FC<IProps> = (props) => {
  const { selectedColor, onChange } = props;
  const [customColorList, setCustomColorList] = useState<ColorList>([]);
  const colorInputId = useId();

  const handleColorInputBlur = (event) => {
    const value = event.target.value;
    const customColorItem = {
      label: "",
      value,
      selected: true,
    };
    setCustomColorList([...customColorList, customColorItem]);
  };

  const handleSelectColor = (value: string, event: React.MouseEvent) => {
    event.preventDefault();
    typeof onChange === "function" && onChange(value, event);
  };

  return (
    <div className="background-color-popover-selector">
      <div
        className="clear-color-btn"
        onMouseDown={(event) => handleSelectColor("transparent", event)}
      >
        <ClearColorIcon />
        <span className="clear-color-btn-text">无</span>
      </div>
      <ul className="color-list">
        {DEFAULT_COLOR_LIST.map((item, index) => (
          <li
            key={index}
            className={cx("color-item", {
              "color-item-selected": selectedColor === item.value,
            })}
            onMouseDown={(event) => handleSelectColor(item.value, event)}
          >
            <span
              style={{ backgroundColor: item.value }}
              className="color-item-text"
            >
              A
            </span>
          </li>
        ))}
      </ul>

      <div className="custom-color">
        <h1 className="custom-color-title">自定义</h1>
        <ul className="color-list">
          {customColorList.map((item, index) => (
            <li
              key={index}
              className={cx("color-item", {
                "color-item-selected": selectedColor === item.value,
              })}
              onMouseDown={(event) => handleSelectColor(item.value, event)}
            >
              <span
                style={{ backgroundColor: item.value }}
                className="color-item-text"
              >
                A
              </span>
            </li>
          ))}
          <li className="add-color-btn">
            <label className="add-color-btn-label" htmlFor={colorInputId}>
              <AddIcon />
            </label>
            <div className="add-color-btn-input-wrapper">
              <input
                className="add-color-btn-input"
                type="color"
                id={colorInputId}
                onBlur={handleColorInputBlur}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ColorPopoverSelector;
