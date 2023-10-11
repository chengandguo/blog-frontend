import React from "react";
import NavHeader from "@/business-components/nav-header";
import "./index.scss";

const ArticleDetail: React.FC = () => {
  return (
    <div className="">
      <NavHeader />
      <article>
        <h1>非线性的世界，线性的你</h1>

        <main>
          "新人企业家的常见错误，就是认为结果是可预测的。如果我长期努力工作，就应该会得到某种成果。"
          "实际上，你的成果是不可预测的。你工作多么努力并不重要，重要的是你在做什么、与谁一起工作、以及在哪里工作。
          "
        </main>
      </article>
    </div>
  );
};

export default ArticleDetail;
