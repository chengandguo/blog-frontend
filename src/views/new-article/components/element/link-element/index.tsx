import React from "react";
import { Popover, Tooltip, message } from "antd";
import LinkIcon from "../../editor-toolbar/icons/link-icon";
import CopyIcon from "@/components/copy-icon";
import ModifyIcon from "@/components/modify-icon";
import CancelLinkIcon from "@/components/cancel-link-icon";
import copy from "copy-to-clipboard";

import "./index.scss";

interface IProps {
  link: string;
  children?: React.ReactNode;
}

const LinkElement: React.FC<IProps> = (props) => {
  const { link, attributes, children } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const handleCopyLink = (event: React.MouseEvent) => {
    event.preventDefault();
    copy(link);
    messageApi.open({
      type: "success",
      content: "复制链接成功",
    });
  };

  const handleModifyLink = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleCancelLink = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const renderContent = () => {
    return (
      <div className="link-leaf-popover">
        <span className="link-leaf-popover-icon">
          <LinkIcon />
        </span>
        <a href={link} className="link-leaf-popover-link">
          {link}
        </a>
        <ul className="link-leaf-popover-list">
          <li className="link-leaf-popover-item">
            <Tooltip title="复制链接">
              <span
                className="link-leaf-popover-item-target"
                onMouseDown={handleCopyLink}
              >
                <CopyIcon />
              </span>
            </Tooltip>
          </li>
          <li className="link-leaf-popover-item">
            <Tooltip title="修改链接">
              <span
                className="link-leaf-popover-item-target"
                onMouseDown={handleModifyLink}
              >
                <ModifyIcon />
              </span>
            </Tooltip>
          </li>
          <li className="link-leaf-popover-item">
            <Tooltip title="取消链接">
              <span
                className="link-leaf-popover-item-target"
                onMouseDown={handleCancelLink}
              >
                <CancelLinkIcon />
              </span>
            </Tooltip>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      {contextHolder}
      <Popover content={renderContent}>
        <span data-format="link" className="link-element" {...attributes}>
          {children}
        </span>
      </Popover>
    </>
  );
};

export default LinkElement;
