import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const CopyIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="#444746"
    >
      <g fillRule="nonzero" transform="translate(3 4)">
        <path d="M7 1h7c1.1045695 0 2 .8954305 2 2v9c0 1.1045695-.8954305 2-2 2H7c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2zm7 11V3H7v9h7z" />
        <path d="M1.99986157 5.9992076v9.61838766c0 .76193454.65346226 1.38533553 1.45213835 1.38533553h9.54786168v-1.99899715H3.99986157V5.9992076h-2z" />
      </g>
    </svg>
  );
};

export default CopyIcon;
