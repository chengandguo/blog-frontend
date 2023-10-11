import { LayoutContext } from "antd/es/layout/layout";
import React from "react";
import "./index.scss";

interface IProps {
  children: React.ReactNode;
}

const Leaf: React.FC<IProps> = (props) => {
  const { attributes, leaf } = props;
  let { children } = props;
  if (leaf.bold) {
    children = <strong className="slate-leaf-bold">{children}</strong>;
  }

  if (leaf.italic) {
    children = <em className="slate-leaf-italic">{children}</em>;
  }

  if (leaf.underline) {
    children = <span className="slate-leaf-underline">{children}</span>;
  }

  if (leaf.strikethrough) {
    children = <span className="slate-leaf-strikethrough">{children}</span>;
  }

  if (leaf.color) {
    children = (
      <span className="slate-leaf-color" style={{ color: leaf.color }}>
        {children}
      </span>
    );
  }

  if (leaf.backgroundColor) {
    children = (
      <span
        className="slate-leaf-background-color"
        style={{ backgroundColor: leaf.backgroundColor }}
      >
        {children}
      </span>
    );
  }

  return <span {...attributes}>{children}</span>;
};

export default Leaf;
