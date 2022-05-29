import ACTION_TYPES from "./actionTypes";

export const addTodo = (value) => ({
  type: ACTION_TYPES.ADD_TODO,
  value: value,
});

export const deleteTodo = (id) => ({
  type: ACTION_TYPES.DELETE_TODO,
  value: id,
});

export const changesTodo = (id) => ({
  type: ACTION_TYPES.CHANGES_TODO,
  value: id,
});
