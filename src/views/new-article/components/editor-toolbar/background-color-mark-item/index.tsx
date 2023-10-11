import React, { useEffect, useState } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import cx from "@/utils/classnames";
import { Tooltip, Popover } from "antd";
import DownArrowIcon from "@/components/down-arrow-icon";
import BackgroundColorIcon from "../icons/background-color-icon";
import ColorPopoverSelector from "./color-popover-selector";
import "./index.scss";

interface IProps {
  tooltipTitle: React.ReactNode; // tooltip 提示

  format: string; // 格式化内容
}

const BackgroundColorMarkItem: React.FC<IProps> = (props) => {
  const { tooltipTitle, format } = props;
  const [color, setColor] = useState<string>("#242424");
  const [open, setOpen] = useState<boolean>(false);
  const editor = useSlate();

  useEffect(() => {
    handleToggleMark();
  }, [color]);

  const handleToggleMark = () => {
    Editor.addMark(editor, format, color);
  };

  const handleChangeColor = async (value: string) => {
    setColor(value);
    setOpen(false);
  };

  const handleOpen = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(!open);
  };

  const handleClosePopover = (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <li className={cx("editor-toolbar-item1")} data-format={format}>
      <Tooltip title={tooltipTitle} mouseEnterDelay={0.2}>
        <span
          className="editor-toolbar-item-icon"
          onMouseDown={(event) => {
            event.preventDefault();
            handleToggleMark();
          }}
        >
          <BackgroundColorIcon color={color} />
        </span>
      </Tooltip>

      <Popover
        open={open}
        content={
          <ColorPopoverSelector
            selectedColor={color}
            onChange={handleChangeColor}
          />
        }
      >
        <div onMouseDown={handleOpen}>
          <DownArrowIcon />
        </div>
      </Popover>

      {open && (
        <div
          className="color-popover-selector-mask"
          onMouseDown={handleClosePopover}
        ></div>
      )}
    </li>
  );
};

export default BackgroundColorMarkItem;
