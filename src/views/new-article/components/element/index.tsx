import React from "react";
import LinkElement from "./link-element";
import ImageElement from "./image-element";
import CodeBlockElement from "./code-block-element";
import "./index.scss";

interface IProps {}

const Element: React.FC = (props) => {
  const { attributes, children, element } = props;
  // console.log("Element props: ", props);
  switch (element.type) {
    case "h1":
      return (
        <h1 {...attributes} style={{ fontSize: element.fontSize }}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...attributes} style={{ fontSize: element.fontSize }}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...attributes} style={{ fontSize: element.fontSize }}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 {...attributes} style={{ fontSize: element.fontSize }}>
          {children}
        </h4>
      );
    case "block-quote":
      return (
        <blockquote {...attributes} className="slate-block-quote">
          {children}
        </blockquote>
      );
    case "link":
      return (
        <LinkElement attributes={attributes} link={element.href}>
          {children}
        </LinkElement>
      );
    case "image":
      return (
        <ImageElement attributes={attributes} element={element}>
          {children}
        </ImageElement>
      );
    case "code-block":
      return (
        <CodeBlockElement attributes={attributes} element={element}>
          {children}
        </CodeBlockElement>
      );
    default:
      return (
        <p {...attributes} style={{ fontSize: element.fontSize }}>
          {children}
        </p>
      );
  }
};

export default Element;
