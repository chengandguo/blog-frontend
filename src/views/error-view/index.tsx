/**
 * @description: 通用错误页面
 */

import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const ErrorView: React.FC = () => {
  return (
    <NavLink to="/">
      <div>返回首页</div>
    </NavLink>
  );
};

export default ErrorView;
