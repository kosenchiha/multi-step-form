export const ADD_STEP = "ADD_STEP";
export const SUBMIT_FORM = "SUBMIT_FORM";

interface AddStepAction {
  type: typeof ADD_STEP;
  step: number;
}

interface SubmitFormAction {
  type: typeof SUBMIT_FORM;
}

export type StepsAction = AddStepAction | SubmitFormAction;

// Action creators

export const addStep = (step: number): StepsAction => ({
  type: ADD_STEP,
  step,
});

export const submitForm = (): StepsAction => ({ type: SUBMIT_FORM });
