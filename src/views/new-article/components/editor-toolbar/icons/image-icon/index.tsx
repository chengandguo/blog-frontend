import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const ImageIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.5 17q-.625 0-1.062-.448Q3 16.104 3 15.5v-11q0-.604.438-1.052Q3.875 3 4.5 3h11q.625 0 1.062.448Q17 3.896 17 4.5v11q0 .604-.438 1.052Q16.125 17 15.5 17Zm0-1.5h11v-11h-11v11Zm1-1.5h9l-3-4-2.25 3-1.5-2Zm-1 1.5v-11 11Z"
        fill="#444746"
        transform="translate(2.5, 2.5)"
      />
    </svg>
  );
};

export default ImageIcon;
