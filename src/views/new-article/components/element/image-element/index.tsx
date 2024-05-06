import React, { useState, useRef, useEffect } from "react";
import cx from "@/utils/classnames";
import { Transforms } from "slate";
import {
  useSlateStatic,
  useSelected,
  useFocused,
  ReactEditor,
} from "slate-react";
import "./index.scss";

interface IProps {}

/**
 *
 *  ---------------------x
 * |  left     middle   right
 * |top
 * |
 * |middle
 * |
 * |bottom
 * y
 */

const ImageElement: React.FC<IProps> = (props) => {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);
  const selected = useSelected();
  const focused = useFocused();
  const startPositionRef = useRef({
    x: 0,
    y: 0,
    blockArrowX: "right",
    blockArrowY: "bottom",
    resizeOriginX: "left",
    resizeOriginY: "top",
  });
  const isDraggingRef = useRef<boolean>(false);
  const [imageSize, setImageSize] = useState({ width: 143, height: 205 });
  const [resizeSize, setResizeSize] = useState({ width: 143, height: 205 });

  useEffect(() => {
    document.addEventListener("mousemove", handleResizeMove);
    document.addEventListener("mouseup", handleResizeEnd);
    return () => {
      document.removeEventListener("mousemove", handleResizeMove);
      document.removeEventListener("mouseup", handleResizeEnd);
    };
  });

  const handleResizeStart = (
    event: React.MouseEvent,
    position: { x: string; y: string }
  ) => {
    console.log("handleResizeStart: ", event);
    const { clientX, clientY } = event;
    isDraggingRef.current = true;
    const { resizeOriginX, resizeOriginY } = getResizeOrigin(
      position.x,
      position.y
    );
    startPositionRef.current = {
      x: clientX,
      y: clientY,
      blockArrowX: position.x, // 缩放块所在的位置坐标
      blockArrowY: position.y,
      resizeOriginX,
      resizeOriginY,
    };
  };

  const getResizeOrigin = (blockArrowX: string, blockArrowY: string) => {
    let resizeOriginX = "left";
    let resizeOriginY = "top";
    const map = {
      left: "right",
      top: "bottom",
      right: "left",
      bottom: "top",
    };

    if (blockArrowX === "left" || blockArrowX === "right") {
      resizeOriginX = map[blockArrowX];
    }

    if (blockArrowY === "top" || blockArrowY === "bottom") {
      resizeOriginY = map[blockArrowY];
    }

    if (blockArrowX === "middle") {
      resizeOriginX = "left";
    }

    if (blockArrowY === "middle") {
      resizeOriginY = "top";
    }

    return {
      resizeOriginX,
      resizeOriginY,
    };
  };

  const handleResizeMove = (event: React.MouseEvent) => {
    if (!isDraggingRef.current) {
      return;
    }
    console.log("handleResizeMove: ", event);
    const { clientX, clientY } = event;

    const { moveX, moveY } = getMoveByDirection(
      clientX - startPositionRef.current.x,
      clientY - startPositionRef.current.y
    );

    let resizeWidth = imageSize.width + moveX;
    let resizeHeight = imageSize.height + moveY;

    const minSize = 1;
    if (resizeWidth < minSize) {
      resizeWidth = minSize;
    }
    if (resizeHeight < minSize) {
      resizeHeight = minSize;
    }
    setResizeSize({
      width: resizeWidth,
      height: resizeHeight,
    });
  };

  /**
   * 对角线左上角的点需要变向
   * 对于左上角的A点，则moveX，与moveY均需要反向
   * A-------------
   * |           - |
   * |        -    |
   * |     -       |
   * |  -          |
   * ---------------
   */
  const getMoveByDirection = (moveX: number, moveY: number) => {
    const { blockArrowX, blockArrowY } = startPositionRef.current;
    if (blockArrowX === "left") {
      moveX = -moveX;
    }
    if (blockArrowY === "top") {
      moveY = -moveY;
    }

    if (blockArrowX === "middle") {
      moveX = 0;
    }

    if (blockArrowY === "middle") {
      moveY = 0;
    }

    // 四个对角约束宽高缩放比例, 同增同减
    if (
      (blockArrowX === "right" && blockArrowY === "bottom") ||
      (blockArrowX === "left" && blockArrowY === "top") ||
      (blockArrowX === "right" && blockArrowY === "top") ||
      (blockArrowX === "left" && blockArrowY === "bottom")
    ) {
      const absMoveX = Math.abs(moveX);
      const absMoveY = Math.abs(moveY);
      let targetMove = absMoveX;
      let targetSign = getNumberSign(moveX);
      let isMoveXBase = true; // 是否依据宽度来控制缩放
      if (absMoveX < absMoveY) {
        targetMove = absMoveY;
        targetSign = getNumberSign(moveY);
        isMoveXBase = false;
      }
      targetMove = targetMove * targetSign;
      const ratio = imageSize.width / imageSize.height; // 宽高比
      if (isMoveXBase) {
        moveX = targetMove;
        moveY = targetMove / ratio;
      } else {
        moveX = targetMove * ratio;
        moveY = targetMove;
      }
    }

    return {
      moveX,
      moveY,
    };
  };

  const getNumberSign = (digital: number) => {
    return digital >= 0 ? 1 : -1;
  };

  const handleResizeEnd = (event: React.MouseEvent) => {
    console.log("handleResizeEnd: ", event);
    if (!isDraggingRef.current) {
      return;
    } else {
      isDraggingRef.current = false;
    }

    setImageSize({
      width: resizeSize.width,
      height: resizeSize.height,
    });
  };

  const imageOriginStyle = {
    width: imageSize.width,
    height: imageSize.height,
  };

  const imageResizeStyle = {
    width: resizeSize.width,
    height: resizeSize.height,
    [startPositionRef.current.resizeOriginX]: 0,
    [startPositionRef.current.resizeOriginY]: 0,
  };

  return (
    <div {...attributes} className="slate-element-image">
      {children}

      <div
        className="image-container"
        style={imageOriginStyle}
        contentEditable={false}
      >
        <img src={element.url} className="image-origin" />
        {selected && focused && (
          <div className="image-resize" style={imageResizeStyle}>
            {/* x y position, clockwise*/}
            <span
              className={cx("resize-block", "resize-block-left-top")}
              onMouseDown={(event) =>
                handleResizeStart(event, { x: "left", y: "top" })
              }
            />
            <span
              className={cx("resize-block", "resize-block-middle-top")}
              onMouseDown={(event) =>
                handleResizeStart(event, { x: "middle", y: "top" })
              }
            />
            <span
              className={cx("resize-block", "resize-block-right-top")}
              onMouseDown={(event) =>
                handleResizeStart(event, { x: "right", y: "top" })
              }
            />

            <span
              className={cx("resize-block", "resize-block-left-middle")}
              onMouseDown={(event) =>
                handleResizeStart(event, { x: "left", y: "middle" })
              }
            />
            <span
              className={cx("resize-block", "resize-block-right-middle")}
              onMouseDown={(event) =>
                handleResizeStart(event, { x: "right", y: "middle" })
              }
            />

            <span
              className={cx("resize-block", "resize-block-left-bottom")}
              onMouseDown={(event) =>
                handleResizeStart(event, { x: "left", y: "bottom" })
              }
            />
            <span
              className={cx("resize-block", "resize-block-middle-bottom")}
              onMouseDown={(event) =>
                handleResizeStart(event, { x: "middle", y: "bottom" })
              }
            />
            <span
              className={cx("resize-block", "resize-block-right-bottom")}
              onMouseDown={(event) =>
                handleResizeStart(event, { x: "right", y: "bottom" })
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageElement;
