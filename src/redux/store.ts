import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./rootReducer";
export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware())
);

export type RootStore = ReturnType<typeof RootReducer>;
