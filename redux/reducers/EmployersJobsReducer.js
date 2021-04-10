const inititalState = [];

const employersJobsReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "UPDATE_EMPLOYERS_JOBS":
      return action.payload;
    default:
      return state;
  }
};

export default employersJobsReducer;
