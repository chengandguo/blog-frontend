import React from "react";
import Image from "@/components/image";
import "./index.scss";

interface IProps {
  avatar: string;
  author: string;
  articleCreatedAt: string;
}

const ArticleItem: React.FC<IProps> = () => {
  return (
    <div className="article-item">
      <div className="article-item-header">
        <Image
          className="article-item-avatar"
          src="https://miro.medium.com/v2/resize:fill:48:48/1*kLYYTxfVSAYAXxyfMrqYKA.png"
          alt="头像"
        />
        <p className="article-item-author">阮一峰</p>
        <span className="article-item-dot">·</span>
        <p className="article-item-time">1天前</p>
      </div>

      <div className="article-item-content">
        <div className="article-item-left">
          <h1 className="article-item-title">非线性的世界，线性的你</h1>
          <div className="article-item-brief">
            纳瓦尔（Naval
            Ravikant）是一位美国风险投资家，写过一组系列文章《如何致富》（How to
            get
            rich），非常出名。“真正有效的工作方式，不是铁人三项或马拉松，比拼谁坚持的时间长，而是短跑，当机会来临的时候冲刺，平时注意健康和休息。”
          </div>
        </div>

        <Image
          src="https://miro.medium.com/v2/resize:fill:224:224/1*D-TiKrBADjkMrnHjBAQ4bQ.png"
          className="article-item-banner"
        />
      </div>

      <div className="article-item-footer">
        <p className="article-item-tag">想法</p>
        <p className="article-item-reading-item">17分钟阅读时间</p>
      </div>
    </div>
  );
};

export default ArticleItem;
