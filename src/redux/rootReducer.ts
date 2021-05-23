import { combineReducers } from "redux";
import { formProgressReducer } from "./formProgressReducer";
import { userReducer } from "./userReducer";

const RootReducer = combineReducers({
  formProgressState: formProgressReducer,
  userState: userReducer,
});

export default RootReducer;
