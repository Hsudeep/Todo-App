import axios from "axios";
import { setLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes";

const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  console.log(payload, "payload");
  return axios
    .post("http://localhost:8000/users/createUser", payload)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      return types.REGISTER_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_FAILURE, payload: err });
      return types.REGISTER_FAILURE;
    });
};

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  console.log(payload, "login payload");
  return axios
    .post("http://localhost:8000/users/login", payload)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token });
      return types.LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: err });
      return types.LOGIN_FAILURE;
    });
};

const logout = (dispatch) => {
  dispatch({ type: types.LOGIN_FAILURE });
  setLocalData("token", "");
};
export { register, login, logout };
