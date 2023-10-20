import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const LinkIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 14H6q-1.667 0-2.833-1.167Q2 11.667 2 10q0-1.667 1.167-2.833Q4.333 6 6 6h3v1.5H6q-1.042 0-1.771.729Q3.5 8.958 3.5 10q0 1.042.729 1.771.729.729 1.771.729h3Zm-2-3.25v-1.5h6v1.5ZM11 14v-1.5h3q1.042 0 1.771-.729.729-.729.729-1.771 0-1.042-.729-1.771Q15.042 7.5 14 7.5h-3V6h3q1.667 0 2.833 1.167Q18 8.333 18 10q0 1.667-1.167 2.833Q15.667 14 14 14Z"
        fill="#444746"
        transform="translate(2,3)"
      />
    </svg>
  );
};

export default LinkIcon;
