import { FC, Children } from "react";
import { GRID } from "typings";
import { createFullGrid } from "utils";
import { Block } from "./block";
import { Container, Row } from "./styles";

export const Grid: FC = () => {
  let grid: GRID = createFullGrid();
  console.log(grid);

  return (
    <Container>
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {Children.toArray(
              [...Array(9)].map((_, collIndex) => (
                <Block collIndex={collIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};
