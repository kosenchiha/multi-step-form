import { combineReducers } from "redux";
import { stepsReducer } from "./stepsReducer";
import { userReducer } from "./userReducer";

const RootReducer = combineReducers({
  stepsState: stepsReducer,
  userState: userReducer,
});

export default RootReducer;
