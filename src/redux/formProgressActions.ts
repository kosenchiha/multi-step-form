export const COMPLETE_STEP = "COMPLETE_STEP";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const RESET_FORM_PROGRESS_STATE = "RESET_FORM_PROGRESS_STATE";

interface CompleteStepAction {
  type: typeof COMPLETE_STEP;
  step: number;
}

interface SubmitFormAction {
  type: typeof SUBMIT_FORM;
}

interface ResetFormProgressState {
  type: typeof RESET_FORM_PROGRESS_STATE;
}

export type FormProgressAction =
  | CompleteStepAction
  | SubmitFormAction
  | ResetFormProgressState;

// Action creators

export const completeStep = (step: number): FormProgressAction => ({
  type: COMPLETE_STEP,
  step,
});

export const submitForm = (): FormProgressAction => ({ type: SUBMIT_FORM });
export const resetStepState = (): FormProgressAction => ({
  type: RESET_FORM_PROGRESS_STATE,
});
