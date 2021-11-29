import { FC, Children, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { Block } from "./block";
import { Container, Row } from "./styles";
import { createGrid } from "reducers";
import { INDEX } from "typings";

export const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);
  useEffect(() => {
    create();
  }, [create]);

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
