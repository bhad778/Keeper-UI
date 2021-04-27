const inititalState = [];

const employeesForSwipingReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "UPDATE_EMPLOYEES_FOR_SWIPING":
      return action.payload;
    default:
      return state;
  }
};

export default employeesForSwipingReducer;
