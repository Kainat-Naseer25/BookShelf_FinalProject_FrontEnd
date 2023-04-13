const initalState = {
  user: null,
  logIn: false,
  loginError: false,
  descriptionModal: false,
  addModal: false,
  editModal: false,
  cdata: "",
  type: "public",
  alert: false,
  msg: "",
  edata: "",
  menu: "All",
  search: []
};

export function appReducer(state = initalState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, logIn: true };
    case "LOGIN-ERROR":
      return { ...state, loginError: !state.loginError };
    case "DESCRIPTION-MODAL":
      return {
        ...state,
        descriptionModal: action.payload.show,
        cdata: action.payload.cdata,
      };
    case "ADD-MODAL":
      return { ...state, addModal: action.payload };
    case "ALERT":
      return { ...state, alert: action.payload.alert, msg: action.payload.msg };
    case "EDIT-MODAL":
      return {
        ...state,
        editModal: action.payload.editModal,
        edata: action.payload.edata,
      };
    case "TYPE":
      return { ...state, type: action.payload };
    case "MENU":
      return { ...state, menu: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload.search, menu: action.payload.menu };
    case "LOGOUT":
      return { ...state, user: null, logIn: false };
    default:
      return state;
  }
}
