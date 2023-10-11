import React from "react";
import NavHeader from "@/business-components/nav-header";
import ArticleList from "./components/article-list";
import "./index.scss";

const Home: React.FC = () => {
  return (
    <div>
      <NavHeader />
      <div className="article-list-container">
        <ArticleList></ArticleList>
      </div>
    </div>
  );
};

export default Home;
