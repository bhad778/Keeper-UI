const inititalState = {
  _id: "",
  email: "",
  phoneNumber: "",
  matches: [],
  accountType: "",
  companyName: "",
};

const usersReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "UPDATE_LOGGED_IN_USER":
      return action.payload;
    default:
      return state;
  }
};

export default usersReducer;
