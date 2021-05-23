import {
  FormProgressAction,
  COMPLETE_STEP,
  SUBMIT_FORM,
  RESET_FORM_PROGRESS_STATE,
} from "./formProgressActions";

export enum FormStatus {
  Initial = "initial",
  Submitted = "submitted",
}

export interface FormProgressStateI {
  completedSteps: number[];
  formStatus: FormStatus;
}

const initialState = { completedSteps: [], formStatus: FormStatus.Initial };

export const formProgressReducer = (
  state: FormProgressStateI = initialState,
  action: FormProgressAction
): FormProgressStateI => {
  switch (action.type) {
    case COMPLETE_STEP:
      return {
        ...state,
        completedSteps: [...state.completedSteps, action.step],
      };
    case SUBMIT_FORM:
      return { ...state, formStatus: FormStatus.Submitted };
    case RESET_FORM_PROGRESS_STATE:
      return { ...initialState };
    default:
      return state;
  }
};
