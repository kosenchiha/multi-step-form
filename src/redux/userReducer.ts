import {
  UserAction,
  ADD_USER_CONSENT,
  ADD_USER_INFO,
  UserConsentI,
  UserInfoI,
  RESET_USER_STATE,
} from "./userActions";

export interface UserStateI {
  userInfo: UserInfoI;
  userConsent: UserConsentI;
}

const initialState = {
  userInfo: { name: "", role: "", email: "", password: "" },
  userConsent: { email: false, phone: false },
};

export const userReducer = (
  state: UserStateI = initialState,
  action: UserAction
): UserStateI => {
  switch (action.type) {
    case ADD_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    case ADD_USER_CONSENT:
      return { ...state, userConsent: action.userConsent };
    case RESET_USER_STATE:
      return { ...initialState };
    default:
      return state;
  }
};
