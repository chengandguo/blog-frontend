import React from "react";
import ArticleItem from "../article-item";
import "./index.scss";

interface IProps {}
const ArticleList: React.FC<IProps> = (props) => {
  const list = new Array(10).fill(0).map((item, index) => index);
  return (
    <div className="article-list">
      {list.map((item, index) => (
        <ArticleItem key={index} />
      ))}
    </div>
  );
};

export default ArticleList;
