import React, { useEffect, useState } from "react";
import Image from "@/components/image";
import WritingIcon from "./writing-icon";
import "./index.scss";

const DIRECTION = {
  UP: "up",
  DOWN: "down",
  UNKNOWN: "unknown",
};

const NavHeader: React.FC = () => {
  const [transformY, setTransformY] = useState(0);
  const maxHeight = 56;
  useEffect(() => {
    window.addEventListener("scroll", (event) => {});
  });

  const navStyle = {
    transform: `translateY(${transformY}px)`,
  };
  return (
    <nav className="i-nav" style={navStyle}>
      <div className="i-nav-logo">ABC</div>

      <div className="i-nav-right">
        <div className="i-nav-writing">
          <WritingIcon />
          <span className="i-nav-writing-text">写作</span>
        </div>
        <Image
          className="i-nav-writing-avatar"
          src="https://miro.medium.com/v2/resize:fill:64:64/0*n2m3JomTcDbzvICM"
        />
      </div>
    </nav>
  );
};

export default NavHeader;
