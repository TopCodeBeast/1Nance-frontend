import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";
import Logo from "assets/png/logo.png"
import USFlag from "assets/png/unidos.png"
import { ChevronDownIcon } from '@heroicons/react/solid'
import Button from "components/Button";

const Header: React.FC = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const getNavLinkClassName = "p-4 text-white mx-auto text-[18px] hover:text-sky-600 flex"

  return (
    <div className="flex items-center">
        <NavLink to="/" className="pl-12">
            <img src={Logo} alt="logo" />
        </NavLink>
        <div className="absolute flex items-center pl-[360px]">
            <NavLink to="/ICO" className={getNavLinkClassName}>
                What is ICO
            </NavLink> 
            <NavLink to="/Solutions" className={getNavLinkClassName}>
                Solutions
            </NavLink> 
            <NavLink to="/WhitePaper" className={getNavLinkClassName}>
                WhitePaper
            </NavLink>
            <NavLink to="/TokenSale" className={getNavLinkClassName}>
                Token Sale
            </NavLink> 
            <NavLink to="/Roadmap" className={getNavLinkClassName}>
                Roadmap
            </NavLink> 
            <NavLink to="/More" className={getNavLinkClassName}>
                More
                <ChevronDownIcon className="w-6 h-6" />
            </NavLink>
            <NavLink to="/More" className={`${getNavLinkClassName} flex flex-rows`}>
                <div className="flex items-center gap-1">
                    <img src={USFlag} alt="usflag" />
                    <div>EN</div>                    
                    <ChevronDownIcon className="w-6 h-6" />
                </div>
            </NavLink>
            <Button url="/" title="Sign In"></Button>
        </div>
    </div>
  );
}

export default Header;
