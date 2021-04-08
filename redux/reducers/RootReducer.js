import { combineReducers } from "redux";

import JobReducer from "./JobReducer";
import MatchesReducer from "./MatchesReducer";
import NavigationReducer from "./NavigationReducer";
import UsersReducer from "./UsersReducer";

export default combineReducers({
  selectedJob: JobReducer,
  bottomNavBarHeight: NavigationReducer,
  loggedInUserObject: UsersReducer,
  matches: MatchesReducer,
});
