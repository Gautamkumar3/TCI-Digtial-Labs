import {
  GET_TODOS_ERROR,
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
} from "./dashboard.type";

const initData = {
  loading: false,
  error: false,
  todoData: [],
  groups: [
    [
      {
        userId: 1,
        id: 13,
        title: "et doloremque nulla",
        completed: false,
      },
      {
        userId: 1,
        id: 14,
        title: "repellendus sunt dolores architecto voluptatum",
        completed: true,
      },
    ],
  ],
};

export const todoReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_TODOS_LOADING:
      return { ...state, loading: true };
    case GET_TODOS_ERROR:
      return { ...state, loading: false, error: true };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: true,
        todoData: payload,
        groups: [...state.groups, payload],
      };
    default:
      return {
        ...state,
      };
  }
};
