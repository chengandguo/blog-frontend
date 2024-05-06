import React, { useState } from "react";
import { Dropdown } from "antd";
import { Transforms } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import { DownOutlined } from "@ant-design/icons";
import CopyIcon from "@/components/copy-icon";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import cx from "@/utils/classnames";
import { languageList } from "./constants";
import "./index.scss";

interface IProps {
  children?: React.ReactNode;
}

hljs.registerLanguage("javascript", javascript);

const CodeBlockElement: React.FC<IProps> = (props) => {
  const { children, attributes, element } = props;
  const [language, setLanguage] = useState("Javascript");
  const editor = useSlate();
  console.log("props: ", props);

  const handleChangeLanguage = (item) => {
    const selectedLanguage = item.key;
    setLanguage(selectedLanguage);
    const path = ReactEditor.findPath(editor, element);
    Transforms.setNodes(editor, { language: selectedLanguage }, { at: path });
  };

  const highlightCode = (text) => {
    const highlightedCode = hljs.highlight(language, text).value;
    return highlightedCode;
  };

  const highlightedCode = highlightCode(element.children[0].text);

  console.log("highlightedCode: ", highlightedCode);
  return (
    <div data-format="code-block" className="code-block" {...attributes}>
      <div className="code-block-toolbar" contentEditable={false}>
        <Dropdown
          trigger={["click"]}
          menu={{
            items: languageList,
            selectedKeys: [language],
            onClick: handleChangeLanguage,
          }}
        >
          <div className="code-block-language-dropdown">
            <span className="code-block-language-dropdown-text">
              {language}
            </span>
            <DownOutlined className="code-block-language-dropdown-icon" />
          </div>
        </Dropdown>
        <div className="code-block-toolbar-copy">
          <CopyIcon className="code-block-toolbar-copy-icon" />
          <span className="code-block-toolbar-copy-text">复制</span>
        </div>
      </div>

      <pre className={cx("code-block-content", `language-${element.language}`)}>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlockElement;
