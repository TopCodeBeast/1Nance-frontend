// import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/png/logo.png"
import USFlag from "../../assets/png/estados-unidos1.png"
import { ChevronDownIcon } from '@heroicons/react/solid'
import { CommonButton } from "../../components/ButtonComponent";

const Header: React.FC = () => {

  // const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

  const getNavLinkClassName = "z-50 px-6 py-8 text-white mx-auto text-[18px] hover:text-sky-600 flex"

  return (
    <div className="items-center">
      <div className="absolute flex z-0">
        <NavLink to="/" className="pl-12">
          <img src={Logo} alt="logo" />
        </NavLink>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center">
          <NavLink to="/ico" className={getNavLinkClassName}>
            What is ICO
          </NavLink>
          <NavLink to="/solutions" className={getNavLinkClassName}>
            Solutions
          </NavLink>
          <NavLink to="/whitePaper" className={getNavLinkClassName}>
            WhitePaper
          </NavLink>
          <NavLink to="/tokenSale" className={getNavLinkClassName}>
            Token Sale
          </NavLink>
          <NavLink to="/roadmap" className={getNavLinkClassName}>
            Roadmap
          </NavLink>
          <NavLink to="/more" className={getNavLinkClassName}>
            More
            <ChevronDownIcon className="w-6 h-6" />
          </NavLink>
          <NavLink to="/more" className={`${getNavLinkClassName} flex flex-rows`}>
            <div className="flex items-center gap-1">
              <img src={USFlag} className="w-full w-8 h-8" alt="usflag" />
              <div>EN</div>
              <ChevronDownIcon className="w-6 h-6" />
            </div>
          </NavLink>
          <CommonButton url="/" title="Sign In" isSmall />
        </div>
      </div>
    </div>
  )
}

export default Header
