import axios from "axios";
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./action.type";

export const getData = (payload) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  return axios
    .get("https://api.spacexdata.com/v3/capsules", payload)
    .then((r) => {
      dispatch({ type: GET_DATA_SUCCESS, payload: r.data });
      return { type: GET_DATA_SUCCESS };
    })
    .catch((e) => {
      dispatch({ type: GET_DATA_FAILURE, payload: e });
      return { type: GET_DATA_FAILURE };
    });
};
