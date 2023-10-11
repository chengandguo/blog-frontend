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
      <g fill="none" fillRule="evenodd">
        <mask id="add_item_circle_a" fill="#fff">
          <path d="M9.75 5.25h-1.5v3h-3v1.5h3v3h1.5v-3h3v-1.5h-3v-3zM9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5zM9 15c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6z" />
        </mask>
        <g mask="url(#add_item_circle_a)" fill="#1a73e8">
          <path d="M0 0h18v18H0z" />
        </g>
      </g>
    </svg>
  );
};

export default AddIcon;
