import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import InputField from "./components/InputField/InputField";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
import { addTodo } from "./store/actions/todoAction";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo) {
      let todoObj: Todo = { id: Date.now(), todo: todo };
      dispatch(addTodo(todoObj));
      setTodo("");
    }
  };
  return (
    <div className="App">
      <div className="container">
        <span className="heading">Todo App</span>
        <div style={{ width: "100%", display: "flex", marginBottom: "20px" }}>
          <InputField todo={todo} setTodo={setTodo} />
          <Button handleClick={handleAddTodo} btnType="default" title="Add" />
        </div>

        <div
          style={{
            width: "100%",
            padding: "20px 10px",
            height: "100%",
            overflowY: "scroll",
            backgroundColor: "#f2f2f2",
          }}
        >
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
