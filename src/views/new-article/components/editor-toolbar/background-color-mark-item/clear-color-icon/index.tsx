import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const AddIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="#444746"
        fillRule="evenodd"
        d="M12,9 C12,5.67 7,0 7,0 C7,0 6.15,0.97 5.15,2.33 L11.98,9.16 L12,9 L12,9 Z M1.55,1.27 L0.27,2.55 L3.16,5.44 C2.49,6.69 2,7.96 2,9 C2,11.76 4.24,14 7,14 C8.31,14 9.49,13.48 10.39,12.66 L12.73,15 L14,13.73 L1.55,1.27 L1.55,1.27 Z"
        transform="translate(2 2)"
      />
    </svg>
  );
};

export default AddIcon;
