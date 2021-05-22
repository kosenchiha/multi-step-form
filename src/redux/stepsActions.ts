export const ADD_STEP = "ADD_STEP";

interface AddStepAction {
  type: typeof ADD_STEP;
  step: number;
}

export type StepsAction = AddStepAction;

// Action creators

export const addStep = (step: number): StepsAction => ({
  type: ADD_STEP,
  step,
});
