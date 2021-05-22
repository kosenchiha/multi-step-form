import { StepsAction, ADD_STEP } from "./stepsActions";

export interface StepsStateI {
  steps: number[];
}

const initialState = { steps: [] };

export const stepsReducer = (
  state: StepsStateI = initialState,
  action: StepsAction
): StepsStateI => {
  switch (action.type) {
    case ADD_STEP:
      return { ...state, steps: [...state.steps, action.step] };
    default:
      return state;
  }
};
