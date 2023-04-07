const initalState = {
  user: null,
  logIn: false,
};

export function appReducer(state = initalState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload.user, logIn: true };
    case "LOGOUT":
      return { ...state, user: null, logIn: false };
    default:
      return state;
  }
}
