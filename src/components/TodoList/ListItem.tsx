import React from "react";
import { useDispatch } from "react-redux";
import { Todo } from "../../model";
import Button from "../Button";
import { delTodo } from "../../store/actions/todoAction";
import "./listitem.css";

interface Props {
  todo: Todo;
}

const ListItem = ({ todo }: Props) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(delTodo(todo));
  };

  return (
    <div className="listItem">
      <span style={{ paddingLeft: "10px" }}>{todo.todo}</span>
      <div style={{ marginRight: "10px" }}>
        <Button handleClick={handleDeleteTodo} btnType="delete" title="DEL" />
      </div>
    </div>
  );
};

export default ListItem;
