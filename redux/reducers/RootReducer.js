import { combineReducers } from "redux";

import JobReducer from "./JobReducer";
import MatchesReducer from "./MatchesReducer";
import NavigationReducer from "./NavigationReducer";
import UsersReducer from "./UsersReducer";
import EmployersJobsReducer from "./EmployersJobsReducer";
import EmployeesForSwipingReducer from "./EmployeesForSwipingReducer";

export default combineReducers({
  selectedJob: JobReducer,
  bottomNavBarHeight: NavigationReducer,
  loggedInUserObject: UsersReducer,
  matches: MatchesReducer,
  employersJobs: EmployersJobsReducer,
  employeesForSwiping: EmployeesForSwipingReducer,
});
