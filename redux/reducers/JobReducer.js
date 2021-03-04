const inititalState = {
  title: null,
  color: "white",
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
