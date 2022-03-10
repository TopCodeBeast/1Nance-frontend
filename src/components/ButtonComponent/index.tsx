import React from "react";
import { NavLink } from "react-router-dom";
import { DownloadIcon } from "@heroicons/react/solid"

interface CommonButtonProps {
  url?: string,
  title: string,
  isSmall?: boolean,
}

export const CommonButton: React.FC<CommonButtonProps> = ({ url = "", title, isSmall = false }) => {
  return (
    <div className="flex items-center">
      <NavLink to={url} className={`bg-gradient-to-r from-[#FFAF10] to-[#F97919] rounded-lg px-8 py-3 text-[18px] text-[#03185B] text-center font-bold leading-[21px] drop-shadow-sm ${!isSmall ? "min-w-[200px] max-w-[200px]" : ""} `}>
        {title}
      </NavLink>
    </div >
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
