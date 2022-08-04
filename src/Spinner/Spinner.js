import React from "react";
import { Spinner } from "reactstrap";
const Spin = () => {
  return (
    <div className="spinner">
      <Spinner
        color="primary"
        style={{
          height: "3rem",
          width: "3rem",
        }}
      >
        Loading...
      </Spinner>
      
    </div>
  );
};

export default Spin;
