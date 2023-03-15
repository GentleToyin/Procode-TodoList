import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "../../model";
import ListItem from "./ListItem";

const TodoList = () => {
  const items = useSelector((state: any) => state.addDelReducer.todoList);
  return (
    <div
      style={{
        width: "100%",
        height: "95%",
      }}
    >
      {items.length > 0 ? (
        items.map((td: Todo) => <ListItem todo={td} key={td.id} />)
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>You currently have no Todo</span>
        </div>
      )}
    </div>
  );
};

export default TodoList;
