import React from "react";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  url?: string,
  title: string,
  isSmall?: boolean,
}

const Button: React.FC<ButtonProps> = ({ url = "", title, isSmall = false }) => {
  return (
    <div className="flex items-center">
      <NavLink to={url} className={`bg-gradient-to-r from-[#FFAF10] to-[#F97919] rounded-lg px-8 py-3 text-[18px] text-[#03185B] text-center font-bold leading-[21px] drop-shadow-sm ${!isSmall ? "min-w-[200px] max-w-[200px]" : ""} `}>
        {title}
      </NavLink>
    </div >
  )
}

export default Button;
