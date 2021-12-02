import { Button } from "components";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createGrid } from "reducers";
import { AnyAction, Dispatch } from "redux";

export const NewButton = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const createNewGrid = useCallback(() => {
    if (window.confirm("Are you sure you want to start a new game?"))
      dispatch(createGrid());
  }, [dispatch]);
  return <Button onClick={createNewGrid}>New game</Button>;
};
