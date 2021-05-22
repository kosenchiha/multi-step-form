export const ADD_USER_INFO = "ADD_USER_INFO";
export const ADD_USER_CONSENT = "ADD_USER_CONSENT";

export interface UserInfoI {
  name: string;
  role: string;
  email: string;
  password: string;
}

export interface UserConsentI {
  email: boolean;
  phone: boolean;
}

interface AddUserInfo {
  type: typeof ADD_USER_INFO;
  userInfo: UserInfoI;
}

interface AddUserConsent {
  type: typeof ADD_USER_CONSENT;
  userConsent: UserConsentI;
}

export type UserAction = AddUserInfo | AddUserConsent;

//Action creators

export const addUserInfo = (userInfo: UserInfoI): UserAction => ({
  type: ADD_USER_INFO,
  userInfo,
});

export const addUserConsent = (userConsent: UserConsentI): UserAction => ({
  type: ADD_USER_CONSENT,
  userConsent,
});
