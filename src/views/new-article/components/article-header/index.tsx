import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import ThreeDotAnimation from "@/business-components/three-dot-animation";
import Button from "@/components/button";
import MoreOperationIcon from "@/components/more-operation-icon";
import Avatar from "@/business-components/avatar";
import "./index.scss";

interface IProps {}

const ArticleHeader: React.FC<IProps> = (props) => {
  const [isSaved, setIsSaved] = useState<Boolean>(false);
  const handlePublish = () => {};
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <div>查看编辑历史</div>,
    },
  ];

  return (
    <nav className="article-header">
      <div className="article-header-wrapper">
        <div className="article-header-left">
          <div className="article-logo">ABC</div>
          <div className="article-status">
            {isSaved ? (
              "保存中"
            ) : (
              <p>
                <span>保存中</span>
                <ThreeDotAnimation />
              </p>
            )}
          </div>
        </div>

        <div className="article-header-right">
          <Button type="primary" size="large" onClick={handlePublish}>
            发 布
          </Button>
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            arrow
            trigger={["click"]}
          >
            <div className="article-more-operation">
              <MoreOperationIcon />
            </div>
          </Dropdown>
          <Avatar className="article-avatar" />
        </div>
      </div>
    </nav>
  );
};

export default ArticleHeader;
