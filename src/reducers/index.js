import ACTION_TYPES from "../actions/actionTypes";

function reducer(state = [], { value, type }) {
  switch (type) {
    case ACTION_TYPES.ADD_TODO: {
      const newState = [
        ...state,
        {
          text: value.text,
          isDone: false,
          id: Date.now(),
        },
      ];
      return newState;
    }
    case ACTION_TYPES.DELETE_TODO: {
      return [...state].filter((todo) => todo.id !== value.id);
    }
    case ACTION_TYPES.CHANGES_TODO: {
      return [...state].map((todo) => {
        if (todo.id === value.id) {
          value.isDone = !value.isDone;
        }
        return todo;
      });
    }

    default:
      return state;
  }
}

export default reducer;
