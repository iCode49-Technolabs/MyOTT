import React, { useState } from "react";
import "./StarRating.css"
export const StarRating = ({rating,setRating,stratNum,type}) => {
    // const [rating, setRating] = useState(0);
   
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (type=="Ease"?rating[stratNum].effort:rating[stratNum].efficiency) ? "on" : "off"}
              onClick={() => {
                const temp=rating
                if(type=="Ease")
                temp[stratNum].effort=index
                else
                temp[stratNum].efficiency=index
                setRating([...temp])
              }
              }
              
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };