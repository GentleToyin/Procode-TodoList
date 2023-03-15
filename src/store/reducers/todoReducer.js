export const addDelReducer = (state = { todoList: [] }, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, todoList: [...state.todoList, action.payload] };

    case "DELETE":
      return {
        ...state,
        todoList: state.todoList.filter((x) => x.id !== action.payload.id),
      };

    default:
      return state;
  }
};
