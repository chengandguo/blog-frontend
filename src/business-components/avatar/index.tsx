import React from "react";
import cx from "@/utils/classnames";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import Image from "@/components/image";
import "./index.scss";

interface IProps {
  className?: string;
}

const Avatar: React.FC<IProps> = (props) => {
  const { className } = props;
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a className="i-avatar-menu-item">个人信息</a>,
    },
    {
      key: "2",
      label: <a className="i-avatar-menu-item">退出登录</a>,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow trigger={["click"]}>
      <Image
        className={cx("i-avatar", className)}
        src="https://miro.medium.com/v2/resize:fill:64:64/0*n2m3JomTcDbzvICM"
      />
    </Dropdown>
  );
};

export default Avatar;
