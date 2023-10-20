import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const ModifyIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
      <path
        d="M15.51 3.555c.585.585.5925 1.8525 0 2.445l-1.0575 1.0575L13.395 8.115 5.43 16H2v-3.43l7.885-7.9575 1.0575-1.0575L12 2.4975c.585-.585 1.8675-.585 2.4525 0L15.51 3.555zM5 14l7.3225-7.2725L11.265 5.67 4 13v1h1z"
        fill="#444746"
        transform="translate(4, 4)"
      />
    </svg>
  );
};

export default ModifyIcon;
