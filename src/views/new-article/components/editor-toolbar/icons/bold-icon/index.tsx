import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const BoldIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M6 15V4h4.292q1.416 0 2.396.833.979.834.979 2.042 0 .792-.386 1.406-.385.615-1.093.969v.104q.833.271 1.343.979.511.709.511 1.605 0 1.354-1.011 2.208-1.01.854-2.593.854Zm2.062-6.5h2.084q.625 0 1.062-.385.438-.386.438-.948 0-.542-.417-.927-.417-.386-1.021-.386H8.062Zm0 4.604h2.313q.729 0 1.167-.375.437-.375.437-1.021 0-.666-.448-1.052-.448-.385-1.219-.385h-2.25Z"
        fill="#041e49"
        transform="translate(3,3)"
      />
    </svg>
  );
};

export default BoldIcon;
