import React, { useState } from "react";
import { Transforms, Element as SlateElement } from "slate";
import { useSlate } from "slate-react";
import cx from "@/utils/classnames";
import { Tooltip, Popover } from "antd";
import DownArrowIcon from "@/components/down-arrow-icon";
import HeaderPopoverSelector from "./header-popover-selector";
import { getLabel, HeaderItemType } from "./constants";
import "./index.scss";

const ToolbarHeaderItem: React.FC = () => {
  const [headerValue, setHeaderValue] = useState<string>("paragraph");
  const [open, setOpen] = useState<boolean>(false);
  const editor = useSlate();

  const toggleBlock = (currentHeader: HeaderItemType) => {
    const { value, fontSize } = currentHeader;
    Transforms.setNodes<SlateElement>(editor, { type: value, fontSize });
  };

  const handleChangeHeader = async (currentHeader: HeaderItemType) => {
    setHeaderValue(currentHeader.value);
    toggleBlock(currentHeader);
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
    <li className={cx("editor-toolbar-header")} data-format="header">
      <Tooltip title="正文与标题" mouseEnterDelay={0.2}>
        <Popover
          placement="bottomLeft"
          open={open}
          content={
            <HeaderPopoverSelector
              selectedHeader={headerValue}
              onChange={handleChangeHeader}
            />
          }
        >
          <div
            className="editor-toolbar-header-wrapper"
            onMouseDown={handleOpen}
          >
            <span className="editor-toolbar-item-header-title">
              {getLabel(headerValue)}
            </span>
            <DownArrowIcon />
          </div>
        </Popover>
      </Tooltip>

      {open && (
        <div
          className="color-popover-selector-mask"
          onMouseDown={handleClosePopover}
        ></div>
      )}
    </li>
  );
};

export default ToolbarHeaderItem;
