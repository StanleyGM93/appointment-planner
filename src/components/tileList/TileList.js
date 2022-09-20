import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ arrayOfObjects }) => {
  const tileProducer = arrayOfObjects.map((objectInstance, index) => (
    <Tile key={index} objectInstance={objectInstance} />
  ));
  return <div>{tileProducer}</div>;
};
