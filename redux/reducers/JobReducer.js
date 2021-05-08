const inititalState = {
  color: "white",
  title: "Job Board",
};

const jobReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "UPDATE_SELECTED_JOB":
      return action.payload;
    default:
      return state;
  }
};

export default jobReducer;
