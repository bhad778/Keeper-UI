const inititalState = false;

const toggleJobBoardOpenReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "TOGGLE_JOB_BOARD_OPEN":
      return action.payload;
    default:
      return state;
  }
};

export default toggleJobBoardOpenReducer;
