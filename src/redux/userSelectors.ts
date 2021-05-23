import { createSelector } from "reselect";
import { RootStore } from "./store";

export const selectUserState = createSelector(
  (state: RootStore) => state,
  (state) => state.userState
);

export const selectUserInfo = createSelector(
  selectUserState,
  (userState) => userState.userInfo
);

export const selectUserConcent = createSelector(
  selectUserState,
  (userState) => userState.userConsent
);
