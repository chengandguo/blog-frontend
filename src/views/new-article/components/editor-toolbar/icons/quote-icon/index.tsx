import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const QuoteIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  );
};

export default QuoteIcon;
