import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const ItalicIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M5 16v-2h2.375l3.187-8H8V4h7v2h-2.271l-3.208 8H12v2Z"
        fill="#041e49"
        transform="translate(3,3)"
      />
    </svg>
  );
};

export default ItalicIcon;
