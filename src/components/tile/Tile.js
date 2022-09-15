import React from "react";

export const Tile = (obj) => {
  const keys = Object.keys(obj);
  const mappingKeys = keys.map((key) => {
    if (key[0]) {
      return <p className="tile-title">{obj.key}</p>;
    } else {
      return <p className="tile">{obj.key}</p>;
    }
  });

  return <div className="tile-container">{mappingKeys}</div>;
};
