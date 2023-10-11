import React from "react";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  type?: "default" | "primary" | "link" | "text";
  shape?: "round" | "square";
  size?: "small" | "middle" | "large";
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<IProps> = (props) => {
  const {
    className,
    children,
    disabled,
    loading,
    icon,
    type = "default",
    shape = "round",
    size = "middle",
    // onClick,
    href,
    ...restProps
  } = props;

  const buttonType = `button-type-${type}`;
  const buttonShape = `button-shape-${shape}`;
  const buttonSize = `button-size-${size}`;

  // if (href) {
  //   return <a className={cx(buttonType, buttonShape, buttonSize, className)} href={href}>{children}</a>;
  // }

  return (
    <button
      className={cx("i-button", buttonType, buttonShape, buttonSize, className)}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
