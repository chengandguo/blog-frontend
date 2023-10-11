import React, { useState } from "react";
import SwitchList from "@/components/switch-list";
import Input from "@/components/input";
import Button from "@/components/button";
import VerificationCode from "./verification-code";
import "./index.scss";

const { SwitchItem } = SwitchList;

const Login: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSendCode = () => {
    setActiveIndex(1);
  };

  return (
    <div className="login">
      <h1 className="login-title">登录</h1>
      <SwitchList
        containerClassName="login-switch-list"
        activeIndex={activeIndex}
      >
        <SwitchItem className="login-switch-item">
          <Input placeholder="请输入邮箱" label="邮箱" />
          <Button
            type="primary"
            size="large"
            className="send-code-btn"
            onClick={handleSendCode}
          >
            发送验证码
          </Button>
        </SwitchItem>

        <SwitchItem>
          <VerificationCode />
        </SwitchItem>
      </SwitchList>
    </div>
  );
};

export default Login;
