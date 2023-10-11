import React, { useImperativeHandle, useId, useRef, forwardRef } from "react";
import cx from "@/utils/classnames";
import "./index.scss";

interface IProps {
  label: string;
  value: string;
  placeholder: string;
  disabled: string;
  error: React.ReactNode;
  inputClassName?: string;
  inputTextClassName?: string;
  onFocus: (e: React.MouseEvent) => void;
}

const Input: React.FC<IProps> = (props, ref) => {
  const {
    label,
    value,
    placeholder,
    disabled,
    error,
    inputClassName,
    inputTextClassName,
    onFocus,
    onBlur,
    onChange,
  } = props;
  const id = useId();
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef?.current?.focus();
    },

    blur() {
      inputRef?.current?.blur();
    },
  }));

  const handleChange = (event) => {
    const value = event.target.value;
    typeof onChange === "function" && onChange(value);
  };

  const handleFocus = () => {};

  const handleBlur = () => {};

  const handleClear = () => {};

  return (
    <div className={cx("i-input", inputClassName)}>
      {label && (
        <label className="i-input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        id={id}
        className={cx("i-input-text", inputTextClassName)}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        type="text"
      />
      {value && <div className="i-input-clear" onClick={handleClear}></div>}
      {error && <span className="i-input-error">{error}</span>}
    </div>
  );
};

export default forwardRef(Input);
