export const addTodo = (todo) => {
  return {
    type: "ADD",
    payload: todo,
  };
};
export const delTodo = (todo) => {
  return {
    type: "DELETE",
    payload: todo,
  };
};
