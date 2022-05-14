import React from "react";
import thermometer from '../../assets/thermometer.svg'

const SubHeading = (props) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h4 className="subtitle">{props.title}</h4>

      <img
        src={thermometer}
        alt="thermometer img"
        className="thermometer__img"
      />
    </div>
  );
};

export default SubHeading;
