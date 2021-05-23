import { createSelector } from "reselect";
import { RootStore } from "./store";

export const selectFormProgress = createSelector(
  (state: RootStore) => state,
  (state) => state.formProgressState
);
