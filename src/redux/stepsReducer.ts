import { StepsAction, ADD_STEP, SUBMIT_FORM } from "./stepsActions";

export enum FormStatus {
  Initial = "initial",
  Submitted = "submitted",
}

export interface StepsStateI {
  steps: number[];
  formStatus: FormStatus;
}

const initialState = { steps: [], formStatus: FormStatus.Initial };

export const stepsReducer = (
  state: StepsStateI = initialState,
  action: StepsAction
): StepsStateI => {
  switch (action.type) {
    case ADD_STEP:
      return { ...state, steps: [...state.steps, action.step] };
    case SUBMIT_FORM:
      return { ...state, formStatus: FormStatus.Submitted };
    default:
      return state;
  }
};
