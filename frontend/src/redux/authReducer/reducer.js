import * as Types from "./types";

const initialState = {
  name: "",
  username: "",
  email: "",
  private: "",
  profilePicture: "",
  bio: "",
  followers: [],
  following: [],
  token: "",
  authLoading: false,
  authError: false,
};
export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_REQ: {
      return {
        ...state,
        authLoading: true,
      };
    }

    case Types.LOGIN_SUCCESS: {
      return {
        ...state,
        token: payload,
      };
    }

    case Types.LOGIN_FAIL: {
      return {
        ...state,
        authError: true,
        authLoading: false,
      };
    }

    case Types.USER_DETAILS: {
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return state;
    }
  }
};
