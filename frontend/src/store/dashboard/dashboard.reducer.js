import {
  GET_TODOS_ERROR,
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
} from "./dashboard.type";

const initData = {
  loading: false,
  error: false,
  todoData: [],
};

export const todoReducer = (state = initData, { type, payload }) => {
  switch (type) {
    case GET_TODOS_LOADING:
      return { ...state, loading: true };
    case GET_TODOS_ERROR:
      return { ...state, loading: false, error: true };
    case GET_TODOS_SUCCESS:
      return { ...state, loading: false, error: true, todoData: payload };
    default:
      return {
        ...state,
      };
  }
};
