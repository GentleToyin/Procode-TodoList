import React from "react";
import "./inputfield.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField = ({ todo, setTodo }: Props) => {
  return (
    <>
      <input
        className="input_container"
        type="input"
        placeholder="Enter a Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
    </>
  );
};

export default InputField;
