import {
  GET_TODOS_ERROR,
  GET_TODOS_LOADING,
  GET_TODOS_SUCCESS,
  MANAGE_GROUPS,
} from "./dashboard.type";
import axios from "axios";

let api = "https://jsonplaceholder.typicode.com";

export const getTodosData = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_LOADING });
  try {
    const res = await axios.get(`${api}/todos`);
    return dispatch({
      type: GET_TODOS_SUCCESS,
      payload: res.data.splice(0, 10),
    });
  } catch (er) {
    return dispatch({ type: GET_TODOS_ERROR });
  }
};

export const addGroup = (groups) => ({
  type: MANAGE_GROUPS,
  payload: groups,
});
