import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({
  arrayOfObjects,
  removeContact,
  removeAppointment,
}) => {
  const tileProducer = arrayOfObjects.map((objectInstance, index) => (
    <Tile
      key={index}
      objectInstance={objectInstance}
      removeContact={removeContact}
      removeAppointment={removeAppointment}
    />
  ));
  return <div>{tileProducer}</div>;
};
