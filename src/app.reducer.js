const initalState = {
  user: null,
  logIn: false,
  loginError: false,
  descriptionModal: false,
  addModal: false,
  editModal: false,
  cdata: "",
  edata: "",
  type: "public",
  menu: "All"
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
    case "EDIT-MODAL":
      return { ...state, editModal: action.payload.editModal, edata: action.payload.edata };
    case "TYPE":
      return { ...state, type: action.payload };
    case "MENU":
      return { ...state, menu: action.payload };
    case "LOGOUT":
      return { ...state, user: null, logIn: false };
    default:
      return state;
  }
}
