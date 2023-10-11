import React, { Ref } from "react";
import cx from "@/utils/classnames";

import ToolbarMarkItem from "./toolbar-mark-item";
import ColorMarkItem from "./color-mark-item";
import BackgroundColorMarkItem from "./background-color-mark-item";
// icons
import BoldIcon from "./icons/bold-icon";
import ItalicIcon from "./icons/italic-icon";
import UnderlineIcon from "./icons/underline-icon";
import StrikeThroughIcon from "./icons/strikethrough-icon";

import "./index.scss";

interface IProps {
  className?: string;
}

const EditorToolbar: React.FC<IProps> = (props) => {
  const { className } = props;

  return (
    <div className="editor-toolbar">
      <ul className="editor-toolbar-list">
        <ToolbarMarkItem
          markContent={<BoldIcon />}
          format="bold"
          tooltipTitle="加粗"
        />
        <ToolbarMarkItem
          markContent={<ItalicIcon />}
          format="italic"
          tooltipTitle="斜体"
        />
        <ToolbarMarkItem
          markContent={<UnderlineIcon />}
          format="underline"
          tooltipTitle="下划线"
        />
        <ToolbarMarkItem
          markContent={<StrikeThroughIcon />}
          format="strikethrough"
          tooltipTitle="删除线"
        />
        <ColorMarkItem format="color" tooltipTitle="文字颜色" />

        <BackgroundColorMarkItem
          format="backgroundColor"
          tooltipTitle="文字背景颜色"
        />
      </ul>
    </div>
  );
};

export default EditorToolbar;
