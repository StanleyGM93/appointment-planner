import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (contactsArray) => {
  const tileProducer = contactsArray.map((obj, index) => (
    <Tile key={index} value={obj} />
  ));
  return <div>{tileProducer}</div>;
};
