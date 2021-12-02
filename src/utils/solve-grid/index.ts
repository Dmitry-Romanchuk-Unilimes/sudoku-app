import global from "global";
import { GRID, NUMBERS } from "typings";
import { checkGrid, identifySquare, isInSquare } from "utils";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solveGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      for (let value of numbers) {
        if (!grid[row].includes(value)) {
          let isNotInCol = true;
          for (let i = 0; i < 9; i++) {
            if (value === grid[i][col]) isNotInCol = false;
          }
          if (isNotInCol) {
            const square = identifySquare({ grid, row, col });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) {
                global.counter++;
                break;
              } else if (solveGrid(grid)) return true;
            }
          }
        }
      }
      break;
    }
  }

  grid[row][col] = 0;
}

export default solveGrid;
