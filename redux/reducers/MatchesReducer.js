const inititalState = [];

const matchesReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "UPDATE_MATCHES":
      return action.payload;
    default:
      return state;
  }
};

export default matchesReducer;
