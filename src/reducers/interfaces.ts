import { BLOCK_COORDS, GRID } from "typings";

export interface IReducer {
  grid?: GRID;
  selectedBlock?: BLOCK_COORDS;
}
