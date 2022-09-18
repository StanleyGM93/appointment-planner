import React from "react";

export const Tile = (contact) => {
  const keys = Object.keys(contact);
  const mappingKeys = keys.map((key) => {
    if (key === "name" || key === "title") {
      return <p className="tile-title">{contact.key}</p>;
    } else {
      return <p className="tile">{contact.key}</p>;
    }
  });

  return <div className="tile-container">{mappingKeys}</div>;
};
