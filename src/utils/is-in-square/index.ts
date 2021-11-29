import { SQUARE, NUMBERS } from "./../../typings/index";
interface IInput {
  square: SQUARE;
  value: NUMBERS;
}

function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;
