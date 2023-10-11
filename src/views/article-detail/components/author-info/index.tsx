import React from "react";
import "./index.scss";

const AuthorInfo = () => {
  return (
    <header>
      <Image />
      <div>
        <p>阮一峰</p>
        <div>
          <span>17分钟阅读时间</span>
          <div>1天前</div>
        </div>
      </div>
    </header>
  );
};

export default AuthorInfo;
