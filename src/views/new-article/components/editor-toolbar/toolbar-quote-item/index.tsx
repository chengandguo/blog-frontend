import React from "react";
import cx from "@/utils/classnames";
import { Tooltip } from "antd";
import { useSlate } from "slate-react";
import { Editor, Transforms, Element as SlateElement } from "slate";
import QuoteIcon from "../icons/quote-icon";
import "./index.scss";

const ToolbarQuoteItem: React.FC = () => {
  const editor = useSlate();

  const isBlockActive = () => {
    const { selection } = editor;
    if (!selection) return false;

    const [match] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === "block-quote",
      })
    );

    return !!match;
  };

  const handleToggleBlock = (event: React.MouseEvent) => {
    event.preventDefault();
    const isActive = isBlockActive();

    const newProperties = {
      type: isActive ? "paragraph" : "block-quote",
    };

    Transforms.setNodes<SlateElement>(editor, newProperties);
  };

  return (
    <li
      className={cx("editor-toolbar-item", {
        "editor-toolbar-item-active": isBlockActive(),
      })}
      data-format="block-quote"
      onMouseDown={handleToggleBlock}
    >
      <Tooltip title="引用" mouseEnterDelay={0.2}>
        <span className="editor-toolbar-item-icon">
          <QuoteIcon />
        </span>
      </Tooltip>
    </li>
  );
};

export default ToolbarQuoteItem;
