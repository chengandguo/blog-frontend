import React from "react";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  className?: string;
}

const RightTickIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      viewBox="0 0 48 48"
      fill="black"
    >
      <path d="M0 0h48v48H0z" fill="none" />
      <path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z" />
    </svg>
  );
};

export default RightTickIcon;
