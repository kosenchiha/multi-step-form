import {
  FormProgressAction,
  COMPLETE_STEP,
  SUBMIT_FORM,
  RESET_FORM_PROGRESS_STATE,
} from "../redux/formProgressActions";
import {
  formProgressReducer,
  FormProgressStateI,
  FormStatus,
} from "../redux/formProgressReducer";

const initialState: FormProgressStateI = {
  completedSteps: [2],
  formStatus: FormStatus.Initial,
};

describe("formProgressReducer", () => {
  it("should return the initial state", () => {
    expect(formProgressReducer(initialState, {} as any)).toEqual(initialState);
  });

  it("should handle COMPLETE_STEP", () => {
    const action: FormProgressAction = {
      type: COMPLETE_STEP,
      step: 1,
    };

    const state: FormProgressStateI = {
      completedSteps: [],
      formStatus: FormStatus.Initial,
    };

    expect(formProgressReducer(state, action)).toEqual({
      completedSteps: [1],
      formStatus: "initial",
    });
  });

  it("should handle SUBMIT_FORM", () => {
    const action: FormProgressAction = {
      type: SUBMIT_FORM,
    };

    const state: FormProgressStateI = {
      completedSteps: [0, 1, 2],
      formStatus: FormStatus.Initial,
    };

    expect(formProgressReducer(state, action)).toEqual({
      completedSteps: [0, 1, 2],
      formStatus: "submitted",
    });
  });

  it("should handle RESET_FORM_PROGRESS_STATE", () => {
    const action: FormProgressAction = {
      type: RESET_FORM_PROGRESS_STATE,
    };

    const state: FormProgressStateI = {
      completedSteps: [0, 1, 2],
      formStatus: FormStatus.Submitted,
    };

    expect(formProgressReducer(state, action)).toEqual({
      completedSteps: [],
      formStatus: "initial",
    });
  });
});
