import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const StrikethroughIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="#041e49"
        d="M11.05 11c.44.97-.18 2.28-1.89 2.28-1.87 0-2.41-1.93-2.47-2.15l-1.7.69C5.92 15.09 9.05 15 9.13 15c2.2 0 3.16-1.31 3.3-1.5.35-.46.68-1.47.53-2.5h-1.91zM9.69 8c-.69-.24-1.48-.49-2-.91-.99-.79-.45-2.41 1.37-2.41 1.35 0 1.84 1.02 1.96 1.38l1.62-.69C12.62 5.31 11.92 3 9.03 3c-.81 0-2.3.24-3.16 1.57-.55.86-.74 2.38.21 3.43H1v1.5h16V8H9.69z"
        transform="translate(3,3)"
      />
    </svg>
  );
};

export default StrikethroughIcon;
