import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="vertical-align">
      <img
        src={spinner}
        style={{ width: "75px", margin: "auto", display: "block" }}
        alt="Loading"
      />
    </div>
  );
};

export default Spinner;
