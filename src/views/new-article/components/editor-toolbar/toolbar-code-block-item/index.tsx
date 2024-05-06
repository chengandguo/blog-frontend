import React, { useEffect } from "react";
import cx from "@/utils/classnames";
import { Tooltip } from "antd";
import { Transforms } from "slate";
import { useSlate } from "slate-react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github.css";
import "./index.scss";

window.hljs = hljs;
const ToolbarCodeBlockItem: React.FC = () => {
  const editor = useSlate();

  const handleInsertCodeBlock = async (event: React.MouseEvent) => {
    event.preventDefault();
    const codeBlockNode = {
      type: "code-block",
      language: "javascript", // 默认语言
    };
    Transforms.setNodes(editor, codeBlockNode);
  };

  useEffect(() => {
    // hljs.highlightAll();
  });

  return (
    <li
      className={cx("editor-toolbar-item")}
      data-format="code-block"
      onMouseDown={handleInsertCodeBlock}
    >
      <Tooltip title="插入代码块" mouseEnterDelay={0.2}>
        <span className="editor-toolbar-item-icon">&lt;/&gt;</span>
      </Tooltip>
    </li>
  );
};

export default ToolbarCodeBlockItem;
