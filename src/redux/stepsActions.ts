export const ADD_STEP = "ADD_STEP";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const RESET_STEPS_STATE = "RESET_STEPS_STATE";

interface AddStepAction {
  type: typeof ADD_STEP;
  step: number;
}

interface SubmitFormAction {
  type: typeof SUBMIT_FORM;
}

interface ResetStepState {
  type: typeof RESET_STEPS_STATE;
}

export type StepsAction = AddStepAction | SubmitFormAction | ResetStepState;

// Action creators

export const addStep = (step: number): StepsAction => ({
  type: ADD_STEP,
  step,
});

export const submitForm = (): StepsAction => ({ type: SUBMIT_FORM });
export const resetStepState = (): StepsAction => ({ type: RESET_STEPS_STATE });
