import React, { useRef } from "react";
import ReactDOM from "react-dom";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  visible: boolean;
  left: number;
  top: number;
  popoverClassName?: string;
  children: React.ReactNode;
}

const Popover: React.FC<IProps> = (props) => {
  const { visible, left, top, popoverClassName, children } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const popoverStyle = {
    left,
    top,
  };

  if (!visible) return null;

  const reactNode = (
    <div className={cx("i-popover", popoverClassName)} style={popoverStyle}>
      {children}
    </div>
  );

  if (!containerRef.current) {
    const container = document.createElement("div");
    container.className = "i-popover-container";
    document.body.appendChild(container);
    containerRef.current = container;
  }
  return ReactDOM.createPortal(reactNode, containerRef.current);
};

export default Popover;
