import "./styles.css";
import React from "react";
import { TextAreaProps } from "../../types";

const TextArea: React.FC<TextAreaProps> = ({
  required,
  label,
  error,
  ...props
}) => {
  return (
    <>
      <p>
        {label}
        {required && "*"}
      </p>
      <textarea
        className={`ez-form-maker-textarea ${required && error && "--error"} ${
          props.className
        }`}
        {...props}
      ></textarea>
    </>
  );
};

export default TextArea;
