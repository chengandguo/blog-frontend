import React from "react";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  src: string;
  className: string;
  alt?: string;
}

const Image: React.FC<IProps> = (props) => {
  const { src, className, ...rest } = props;
  return (
    <div className={cx("i-image", className)}>
      <img className="i-image-content" src={src} {...rest} />
    </div>
  );
};

export default Image;
