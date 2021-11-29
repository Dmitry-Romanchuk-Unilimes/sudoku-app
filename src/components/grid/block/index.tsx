import React, { FC } from "react";
import { Container } from "./styles";

interface IProps {
  collIndex: number;
  rowIndex: number;
}

export const Block: FC<IProps> = ({ collIndex, rowIndex }) => {
  return <Container></Container>;
};
