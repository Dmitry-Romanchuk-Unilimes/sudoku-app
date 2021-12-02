import { AnyAction } from "redux";
import * as types from "./types";
import { IReducer } from "./interfaces";
import { compareArrays, copyGrid, createFullGrid, removeNumbers } from "utils";

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID: {
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy);
      const workingGrid = copyGrid(challengeGrid);

      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      };
    }
    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert("Incorrect option");
          return state;
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid))
          alert("Completed!");
        return { ...state, workingGrid: [...state.workingGrid] };
      }
      return state;
    }
    case types.SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords };
    default:
      return state;
  }
}
export default reducer;
