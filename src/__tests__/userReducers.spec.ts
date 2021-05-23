import {
  UserAction,
  ADD_USER_CONSENT,
  ADD_USER_INFO,
  RESET_USER_STATE,
} from "../redux/userActions";
import { userReducer, UserStateI } from "../redux/userReducer";

const initialState: UserStateI = {
  userInfo: { name: "", role: "", email: "", password: "" },
  userConsent: { email: false, phone: false },
};

describe("userReducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(initialState, {} as any)).toEqual(initialState);
  });

  it("should handle ADD_USER_INFO", () => {
    const action: UserAction = {
      type: ADD_USER_INFO,
      userInfo: {
        name: "Test",
        role: "",
        email: "test@email.com",
        password: "Password1",
      },
    };

    const state: UserStateI = {
      userInfo: { name: "", role: "", email: "", password: "" },
      userConsent: { email: false, phone: false },
    };

    expect(userReducer(state, action)).toEqual({
      userInfo: {
        name: "Test",
        role: "",
        email: "test@email.com",
        password: "Password1",
      },
      userConsent: { email: false, phone: false },
    });
  });

  it("should handle ADD_USER_CONSENT", () => {
    const action: UserAction = {
      type: ADD_USER_CONSENT,
      userConsent: { email: true, phone: false },
    };

    const state: UserStateI = {
      userInfo: {
        name: "Test",
        role: "",
        email: "t@s.co",
        password: "Password1",
      },
      userConsent: { email: false, phone: false },
    };

    expect(userReducer(state, action).userConsent).toEqual({
      email: true,
      phone: false,
    });
  });

  it("should handle RESET_USER_STATE", () => {
    const action: UserAction = {
      type: RESET_USER_STATE,
    };

    const state: UserStateI = {
      userInfo: {
        name: "Test",
        role: "",
        email: "t@s.co",
        password: "Password1",
      },
      userConsent: { email: true, phone: true },
    };

    expect(userReducer(state, action)).toEqual(
      initialState
      //   {
      //   userInfo: {
      //     name: "",
      //     role: "",
      //     email: "",
      //     password: "",
      //   },
      //   userConsent: {
      //     email: false,
      //     phone: false,
      //   },
      // }
    );
  });
});
