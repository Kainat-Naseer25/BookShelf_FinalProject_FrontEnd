const initalState = {
  user: null,
  logIn: false,
  loginError: false
};

export function appReducer(state = initalState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, logIn: true };
    case "LOGIN-ERROR":
      return { ...state, loginError: !state.loginError };
    case "LOGOUT":
      return { ...state, user: null, logIn: false };
    default:
      return state;
  }
}
