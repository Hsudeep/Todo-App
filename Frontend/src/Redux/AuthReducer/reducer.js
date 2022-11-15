import { getLocalData, setLocalData } from "../../utils/localStorage";
import * as types from "./actionTypes";

const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    //For Register
    case types.REGISTER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.REGISTER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    // For login

    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.LOGIN_SUCCESS: {
      setLocalData("token", payload)
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
