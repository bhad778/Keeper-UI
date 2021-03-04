import JobReducer from "./JobReducer";
import NavigationReducer from "./NavigationReducer";
import { combineReducers } from "redux";

export default combineReducers({
  selectedJob: JobReducer,
  bottomNavBarHeight: NavigationReducer,
});
