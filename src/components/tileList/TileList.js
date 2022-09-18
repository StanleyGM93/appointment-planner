import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (contactsArray) => {
  const tileProducer = contactsArray.map((contact, index) => (
    <Tile key={index} value={contact} />
  ));
  return <div>{tileProducer}</div>;
};
