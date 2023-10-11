import React from "react";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  className?: string;
  color?: string;
  fill?: string;
}

const TextColorIcon: React.FC<IProps> = (props) => {
  const { className, color, fill = "#333" } = props;
  return (
    <div className={cx("text-color-icon", className)}>
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m5.354 14 1.875-5 1.875-5h1.792l3.75 10h-1.729l-.896-2.562H8L7.083 14H5.354ZM8.5 10h3l-1.458-4.042h-.084L8.5 10Z"
          fill={fill}
          transform="translate(2,3)"
        />
      </svg>
      <div
        className="text-color-icon-tag"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default TextColorIcon;
