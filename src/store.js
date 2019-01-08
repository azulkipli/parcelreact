import createStore from "unistore";
import devtools from "unistore/devtools";
// import persistStore from "unissist";
// import localStorageAdapter from "unissist/integrations/localStorageAdapter";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
  confirm_password: "",
  full_name: "",
  user_name: "",
  mobile_phone: "",
  isLogin: false,
  isLoginLoading: false,
  loginMessage: "",
  isMobile: true,
  listResto: [],
  listOpenTimes: []
};

// const adapter = localStorageAdapter();

export const store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

// persistStore(store, adapter);

const env = process.env;

export const actions = store => ({
  // Actions can just return a state update:
  setField: ({ email, password }, event) => {
    if (event.target.name === "email") return { email: event.target.value };
    if (event.target.name === "password") return { password: event.target.value };
  }
});
