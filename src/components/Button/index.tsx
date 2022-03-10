import React from "react";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  url: string,
  title: string,
}

const Button: React.FC<ButtonProps> = ({ url, title }) => {

  return (
    <div className="flex items-center">
      <NavLink to={url} className="bg-gradient-to-r from-[#FFAF10] to-[#F97919] rounded-lg px-8 py-4 text-[18px] leading-[21px] drop-shadow-sm">
        {title}
      </NavLink>
    </div>
  );
}

export default Button;
