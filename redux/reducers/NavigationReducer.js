const inititalState = 80;

const navigationReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "UPDATE_BOTTOM_NAV_BAR_HEIGHT":
      return action.payload;
    default:
      return state;
  }
};

export default navigationReducer;
