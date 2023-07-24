import React from "react";
import  Svg, {Path, Circle}  from "react-native-svg";

const AddIcon = () => {
    return (
        <Svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Circle
            cx="12.5"
            cy="12.5"
            r="12"
            fill="transparent"
            stroke="#FF6C00"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
            fill="#FF6C00"
          />
        </Svg>
    );
}

export default AddIcon;