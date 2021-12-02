import React, { Dispatch, FC, useCallback } from "react";
import { BLOCK_COORDS, N, NUMBERS } from "typings";
import { Button } from "components";
import { useDispatch, useSelector } from "react-redux";
import { fillBlock, IReducer } from "reducers";
import { AnyAction } from "redux";

interface IProps {
  value: NUMBERS;
}

interface IState {
  selectedBlock?: BLOCK_COORDS;
  selectedValue: N;
}

export const NumberButton: FC<IProps> = ({ value }) => {
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

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0)
      dispatch(fillBlock(value, state.selectedBlock));
  }, [dispatch, state.selectedBlock, state.selectedValue, value]);
  return <Button onClick={fill}>{value}</Button>;
};
