import React from "react";

export const Tile = ({ objectInstance, removeContact, removeAppointment }) => {
  const objectKeys = Object.keys(objectInstance);
  const objectValues = Object.values(objectInstance);

  const handleDelete = (objectInstance) => {
    if (objectInstance.name) {
      removeContact(objectInstance.name);
    } else {
      removeAppointment(objectInstance.title);
    }
  };

  const mappingKeys = objectKeys.map((objectName, index) => {
    if (objectName === "name" || objectName === "title") {
      return (
        <div className="tile-title-container">
          <p className="tile-title" key={objectValues[index]}>
            {objectValues[index]}
          </p>
          <button
            className="remove-button"
            onClick={() => handleDelete(objectInstance)}
          >
            X
          </button>
        </div>
      );
    } else {
      return (
        <p className="tile" key={objectValues[index]}>
          {objectValues[index]}
        </p>
      );
    }
  });

  return <div className="tile-container">{mappingKeys}</div>;
};
