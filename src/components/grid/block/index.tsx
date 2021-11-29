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
}

export const Block: FC<IProps> = ({ collIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid, selectedBlock }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === collIndex
      : false,
    value: grid ? grid[rowIndex][collIndex] : 0,
  }));
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    dispatch(selectBlock([rowIndex, collIndex]));
  }
  return (
    <Container active={state.isActive} onClick={handleClick}>
      {state.value === 0 ? "" : state.value}
    </Container>
  );
};
