import React from "react";
import { NavLink } from "react-router-dom";
import { DownloadIcon } from "@heroicons/react/solid"

interface CommonButtonProps {
  url?: string,
  title: string,
  isSmall?: boolean,
  icon?: any,
  className?: string,
}

export const CommonButton: React.FC<CommonButtonProps> = ({ url = "", title, isSmall = false, icon = null, className = "" }) => {
  return (
    <NavLink to={url} className={`flex justify-center gap-2 items-center bg-gradient-to-r from-[#FFAF10] to-[#F97919] rounded-[12px] px-8 py-3 text-[18px] text-[#03185B] text-center font-bold leading-[21px] drop-shadow-[0_5px_6px_rgba(0,0,0,0.5)] ${!isSmall ? "min-w-[200px] max-w-[240px]" : ""} ${className}`}>
      {title}{icon && <img src={icon} alt="buttonIcon" />}
    </NavLink>
  )
}

interface DownloadButtonProps {
  url?: string,
  lang: string,
  flag?: any,
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ url = "", lang, flag }) => {
  return (
    <div className="grid justify-items-center gap-2 w-24">
      <div className="w-16 h-16"><img src={flag} className="w-full" alt="flag" /></div>
      <div className="flex gap-2 text-[20px] leading-[23.44px] capitalize"><DownloadIcon className="fill-[#FB941A] w-6 h-6" />{lang}</div>
    </div>
  )
}

interface IconButtonProps {
  handler: any,
  icon: any,
  className?: string,
}
export const IconButton: React.FC<IconButtonProps> = ({ handler, icon, className = "" }) => {
  return (
    <div onClick={handler} className={`flex justify-center w-12 h-12 0${className}`}><img src={icon} alt="icon" /></div>
  )
}
