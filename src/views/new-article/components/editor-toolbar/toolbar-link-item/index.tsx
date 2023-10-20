import React, { useState, useRef, useEffect } from "react";
import cx from "@/utils/classnames";
import { Transforms } from "slate";
import { useSlate } from "slate-react";
import { Tooltip } from "antd";
import { sleep } from "@/utils";
import Popover from "@/components/popover";
import Input from "@/components/input";
import Button from "@/components/button";
import LinkIcon from "../icons/link-icon";
import "./index.scss";

const ToolbarLinkItem: React.FC = () => {
  const [popoverPosition, setPopoverPosition] = useState({ left: 0, top: 0 });
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const titleInputRef = useRef(null);
  const editor = useSlate();

  const handleShowPopover = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (popoverVisible) {
      setPopoverVisible(false);
      return;
    }
    const selection = document.getSelection();
    const range = selection?.getRangeAt(0);
    if (!range) return;
    const { left, top, height } = range.getBoundingClientRect();
    const topBufferDistance = 12;
    setPopoverPosition({
      left,
      top: top + height + topBufferDistance,
    });
    setPopoverVisible(true);
    await sleep(0);
    titleInputRef?.current?.focus();
  };

  const handleClosePopover = () => {
    setPopoverVisible(false);
  };

  const handleInsertLink = async (event: React.MouseEvent) => {
    event.preventDefault();
    const linkNode = {
      type: "link",
      href: link,
      children: [{ text: title }],
    };

    editor.isInline = (value) => {
      if (value?.type === "link") {
        return true;
      }
      return false;
    };

    // 插入链接到编辑器中
    Transforms.insertNodes(editor, linkNode);
    setPopoverVisible(false);
  };

  return (
    <li className={cx("editor-toolbar-link")} data-format="link">
      <Tooltip title="插入链接" mouseEnterDelay={0.2}>
        <span
          className="editor-toolbar-item-icon"
          onMouseDown={handleShowPopover}
        >
          <LinkIcon />
        </span>
      </Tooltip>

      <Popover
        visible={popoverVisible}
        left={popoverPosition.left}
        top={popoverPosition.top}
      >
        <div className="link-popover">
          <Input
            label="标题"
            placeholder="请输入链接标题"
            inputTextClassName="link-input-text"
            ref={titleInputRef}
            value={title}
            onChange={(value) => setTitle(value)}
          />
          <Input
            inputClassName="link-input"
            inputTextClassName="link-input-text"
            label="链接"
            placeholder="请输入或者粘贴链接"
            value={link}
            onChange={(value) => setLink(value)}
          />
          <div className="link-action">
            <Button
              size="large"
              className="link-cancel"
              onMouseDown={handleClosePopover}
            >
              取消
            </Button>
            <Button
              type="primary"
              size="large"
              className="link-confirm"
              onMouseDown={handleInsertLink}
            >
              确定
            </Button>
          </div>
        </div>
      </Popover>
    </li>
  );
};

export default ToolbarLinkItem;
