import { combineReducers } from "redux";
import spaceReducer from "./spaceReducer";
import issReducer from './iisReducer';

export default combineReducers({
  peopleInSpace: spaceReducer,
  issLocation: issReducer,
});
