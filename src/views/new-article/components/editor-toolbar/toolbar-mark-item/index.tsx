import React from "react";
import cx from "@/utils/classnames";
import { Editor } from "slate";
import { useSlate } from "slate-react";
import { Tooltip } from "antd";
import "./index.scss";

interface IProps {
  tooltipTitle: React.ReactNode; // tooltip 提示

  markContent: React.ReactNode; // 按钮内容

  format: string; // 格式化内容
}

const ToolbarMarkItem: React.FC<IProps> = (props) => {
  const { tooltipTitle, markContent, format } = props;
  const editor = useSlate();
  const isMarkActive = () => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  // onMousedown is all right
  const handleToggleMark = (event) => {
    event.preventDefault();
    const isActive = isMarkActive(format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  return (
    <li
      className={cx("editor-toolbar-item", {
        "editor-toolbar-item-active": isMarkActive(),
      })}
      data-format={format}
      onMouseDown={handleToggleMark}
    >
      <Tooltip title={tooltipTitle} mouseEnterDelay={0.2}>
        <span className="editor-toolbar-item-icon">{markContent}</span>
      </Tooltip>
    </li>
  );
};

export default ToolbarMarkItem;
