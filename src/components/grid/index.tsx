import { FC, Children, useCallback, useEffect } from "react";
import useMousetrap from "react-hook-mousetrap";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { Block } from "./block";
import { Container, Row } from "./styles";
import { createGrid, fillBlock, IReducer, selectBlock } from "reducers";
import { BLOCK_COORDS, INDEX, N, NUMBERS } from "typings";

interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue: N;
}

export const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  useEffect(() => {
    create();
  }, [create]);

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0) {
        dispatch(fillBlock(n, state.selectedBlock));
      }
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  );

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      );
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      );
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      );
  }

  useMousetrap("1", () => fill(1));
  useMousetrap("2", () => fill(2));
  useMousetrap("3", () => fill(3));
  useMousetrap("4", () => fill(4));
  useMousetrap("5", () => fill(5));
  useMousetrap("6", () => fill(6));
  useMousetrap("7", () => fill(7));
  useMousetrap("8", () => fill(8));
  useMousetrap("9", () => fill(9));
  useMousetrap("down", moveDown);
  useMousetrap("up", moveUp);
  useMousetrap("left", moveLeft);
  useMousetrap("right", moveRight);

  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {Children.toArray(
              [...Array(9)].map((_, collIndex) => (
                <Block
                  collIndex={collIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};
