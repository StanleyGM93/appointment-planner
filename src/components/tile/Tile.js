import React from "react";

export const Tile = (objectInstance) => {
  const objectKeys = Object.keys(objectInstance.objectInstance);
  const objectValues = Object.values(objectInstance.objectInstance);
  const mappingKeys = objectKeys.map((objectName, index) => {
    if (objectName === "name" || objectName === "title") {
      return (
        <p className="tile-title" key={index}>
          - {objectValues[index]}
        </p>
      );
    } else {
      return (
        <p className="tile" key={index}>
          - {objectValues[index]}
        </p>
      );
    }
  });

  return <div className="tile-container">{mappingKeys}</div>;
};
