import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import "../../styles/rating.css"


const starColor = {
  green: "#00FF00",
  grey: "#A9A9A9"
}

function Rating() {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseHover = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return(
    <div>
        <div className='stars'>
          {stars.map ((_,index) =>{
            return (
              <FaStar 
              key={index} 
              size= {24}
              onClick={()=>handleClick(index + 1)}
              onMouseOver = {() => handleMouseHover(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? starColor.green : starColor.grey}
              />
            )
          })}
        </div>
    </div>
  )
}

export default Rating