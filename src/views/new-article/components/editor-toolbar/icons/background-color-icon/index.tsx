import React from "react";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  className?: string;
  color?: string;
  fill?: string;
}

const TextColorIcon: React.FC<IProps> = (props) => {
  const { className, color } = props;
  return (
    <div className={cx("text-color-icon", className)}>
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
        <path
          d="m7 14 .42-.42c.28.25.63.39.99.39.38 0 .77-.15 1.06-.44l7.09-7.09c.59-.59.59-1.54 0-2.12l-1.88-1.88c-.59-.59-1.54-.59-2.12 0L5.47 9.53c-.56.56-.57 1.46-.05 2.05L3 14h4Zm3.12-7L12 8.88l-3.59 3.59-1.88-1.88L10.12 7Z"
          fill="#444746"
          transform="translate(3, 4)"
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
