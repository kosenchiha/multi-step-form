import { StepsAction, ADD_STEP } from "../redux/stepsActions";
import { stepsReducer, StepsStateI } from "../redux/stepsReducer";

const initialState: StepsStateI = {
  steps: [2],
};

describe("stepsReducer", () => {
  it("should return the initial state", () => {
    expect(stepsReducer(initialState, {} as any)).toEqual(initialState);
  });

  it("should handle ADD_STEP", () => {
    const action: StepsAction = {
      type: ADD_STEP,
      step: 1,
    };

    const state: StepsStateI = {
      steps: [],
    };

    expect(stepsReducer(state, action)).toEqual({ steps: [1] });
  });
});
