import React, { useRef } from "react";
import cx from "@/utils/classnames";
import { Tooltip } from "antd";
import { Transforms, createEditor, Descendant } from "slate";
import { useSlate } from "slate-react";
import ImageIcon from "../icons/image-icon";
import "./index.scss";

const ToolbarImageItem: React.FC = () => {
  const fileInputRef = useRef(null);
  const editor = useSlate();
  const handleFileInput = (event: React.MouseEvent) => {
    event.preventDefault();
    fileInputRef?.current?.click();
  };

  const handleFileChange = (event) => {
    console.log("event: ", event);
    console.log(event.target.files);
    const files = event?.target?.files;
    if (!files.length) {
      return;
    }
    for (const file of files) {
      // const imageLocalUrl = URL.createObjectURL(file);
      const imageLocalUrl =
        "https://www.apple.com/v/iphone/home/bp/images/overview/compare/compare_iphone_15__cp3codzoxms2_medium_2x.png";
      console.log(imageLocalUrl);

      const text = { text: "" };
      const image = { type: "image", url: imageLocalUrl, children: [text] };
      Transforms.insertNodes(editor, image, {
        select: true,
      });
      // const newParagraph = {
      //   type: "paragraph",
      //   children: [{ text: "" }],
      // };
      // Transforms.insertNodes(editor, newParagraph);
      // window.URL.revokeObjectURL(localUrl);
    }
    event.target.value = null; // 解决选择相同的文件不触发的问题
  };

  const uploadImage = () => {};

  return (
    <li
      className={cx("editor-toolbar-item")}
      data-format="block-quote"
      onMouseDown={handleFileInput}
    >
      <Tooltip title="插入图片" mouseEnterDelay={0.2}>
        <span className="editor-toolbar-item-icon">
          <ImageIcon />
          <input
            ref={fileInputRef}
            className="file-input"
            type="file"
            accept="image/gif,image/jpeg,image/jpg,image/png"
            multiple
            onChange={handleFileChange}
          />
        </span>
      </Tooltip>
    </li>
  );
};

export default ToolbarImageItem;
