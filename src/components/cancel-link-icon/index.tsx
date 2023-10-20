import React from "react";
import "./index.scss";

interface IProps {
  className?: string;
}

const CancelLinkIcon: React.FC<IProps> = (props) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="#444746"
    >
      <g fill="#444746" fillRule="nonzero" transform="translate(4, 4)">
        <path d="M6 7c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2h1.00824899v2H6c-2.209139 0-4-1.790861-4-4s1.790861-4 4-4l2 2H6z" />
        <path d="M9 13v-2H7v2H6c-2.209139 0-4-1.790861-4-4 0-1.51226247.83920902-2.82851717 2.07732469-3.50846174L2 3.41421356 3.41421356 2l6 6 2.00000004 2 4.0208152 4.0208153-1.4142135 1.4142135L11.5857864 13H9zM5.62154411 7.03575767C4.6979357 7.2126515 4 8.02481994 4 9c0 1.1045695.8954305 2 2 2h3.58578644l-1-1H6V8h.58578644l-.96424233-.96424233zM10 5h2c2.209139 0 4 1.790861 4 4 0 .99914887-.3663331 1.912736-.9720121 2.6137743l-1.4218255-1.4218254C13.8535969 9.85907476 14 9.44663452 14 9c0-1.1045695-.8954305-2-2-2h-2V5zm1 3h1v1l-1-1z" />
      </g>
    </svg>
  );
};

export default CancelLinkIcon;
