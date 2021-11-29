import { GRID, NUMBERS } from "typings";
import { checkGrid, identifySquare, isInSquare } from "utils";
import shuffle from "utils/shuffle";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let fillGrid = (grid: GRID) => {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9);
    col = i % 9;

    if (grid[row][col] === 0) {
      shuffle(numbers);

      for (let value of numbers) {
        if (!grid[row].includes(value)) {
          let isNotInCol = true;
          for (let i = 0; i < 9; i++) {
            if (value === grid[i][col]) isNotInCol = false;
          }
          if (isNotInCol) {
            const square = identifySquare({ col, grid, row });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) return true;
              else if (fillGrid(grid)) return true;
            }
          }
        }
      }
      break;
    }
  }

  grid[row][col] = 0;
};

export default fillGrid;
