import React from "react";
import "./button.css";

interface Props {
  btnType: string;
  title: string;
  handleClick: () => void;
}
const Button = ({ btnType, title, handleClick }: Props) => {
  return (
    <div
      onClick={handleClick}
      className={btnType === "default" ? "button" : "delete"}
    >
      <span>{title}</span>
    </div>
  );
};

export default Button;
