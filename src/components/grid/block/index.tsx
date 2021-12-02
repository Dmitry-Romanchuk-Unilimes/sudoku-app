import React, { FC } from "react";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IReducer, selectBlock } from "reducers";
import { INDEX, N } from "typings";
import { AnyAction, Dispatch } from "redux";

interface IProps {
  collIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  isActive: boolean;
  value: N;
  isPuzzle: boolean;
}

export const Block: FC<IProps> = ({ collIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ workingGrid, selectedBlock, challengeGrid }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === collIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][collIndex] !== 0
          ? true
          : false,
      value: workingGrid ? workingGrid[rowIndex][collIndex] : 0,
    })
  );
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, collIndex]));
  }
  return (
    <Container
      active={state.isActive}
      onClick={handleClick}
      puzzle={state.isPuzzle}
    >
      {state.value === 0 ? "" : state.value}
    </Container>
  );
};
