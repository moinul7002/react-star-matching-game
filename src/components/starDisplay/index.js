import React from "react";
import utils from "../../utils";

const StarComponent = ({ countStar }) => {
  return (
    <>
      {utils.range(1, countStar).map((starId) => (
        <div key={starId} className="star" />
      ))}
    </>
  );
};

export default StarComponent;
