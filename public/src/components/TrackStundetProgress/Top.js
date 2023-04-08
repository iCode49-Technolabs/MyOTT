import React from "react";
import flag_black from "./../images/waving-flag-black.png";
export const Top = ({number}) => {
    
    return (
        <div className="top">
        <img src={flag_black} className="flag" />
        <p style={{ marginTop: "0rem", fontSize: "larger", fontWeight: "600" }}>
        Track Student Progress
          
          
        </p>
        <p style={{textAlign: "right", width: "75%", marginTop: "0rem", fontSize: "larger", fontWeight: "600"}}>
        {number}
          
        </p>
      </div>
    );
  };