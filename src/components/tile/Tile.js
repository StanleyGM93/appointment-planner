import React from "react";

export const Tile = (objectInstance) => {
  const keys = Object.keys(objectInstance);
  const mappingKeys = keys.map((objectName) => {
    if (objectName === "name" || objectName === "title") {
      return (
        <p className="tile-title" key={objectInstance.objectName}>
          {objectInstance.objectName}
        </p>
      );
    } else {
      return (
        <p className="tile" key={objectInstance.objectName}>
          {objectInstance.objectName}
        </p>
      );
    }
  });

  return <div className="tile-container">{mappingKeys}</div>;
};
