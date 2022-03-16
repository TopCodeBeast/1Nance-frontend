import Logo from "../../assets/png/logo.png"
import LogoSM from "../../assets/png/logo-sm.png"
import Flag1 from "../../assets/png/flag1.png"
import Flag2 from "../../assets/png/flag2.png"
import Flag3 from "../../assets/png/flag3.png"
import Flag4 from "../../assets/png/flag4.png"
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { CommonButton } from "../../components/ButtonComponent"
import { useState } from "react"
import { useEffect } from "react"
import Drawer from "./Drawer"

interface HeaderProps {
  handler: any
}

const Header: React.FC<HeaderProps> = ({ handler }) => {

  const padL = ((1920 - window.innerWidth) * (300 / (1920 - 1300))).toFixed()
  const getNavLinkClassName = "z-50 cursor-pointer px-4 py-10 items-center text-[papayawhip] mx-auto text-[18px] hover:text-[papayawhip]/50 flex transform-all duration-300 ease-in"
  const moreClassName = "flex items-center cursor-pointer hover:ml-3.5 active:ml-2.5 transition-all duration-300 ease-out text-[#2f2f2f] font-[700] text-[14px] m-0 py-1.5"

  const [menuMore, setMenuMore] = useState(false)
  const [langMore, setLangMore] = useState(false)
  const [menuLeft, setMenuLeft] = useState(0)
  const [langLeft, setLangLeft] = useState(0)
  const [uiLang, setUiLang] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  const setMoreMenu = (type: any) => {
    if (type === "LANG" && langMore === true)
      setLangMore(true)
    if (type === "MENU" && menuMore === true)
      setMenuMore(true)
  }

  const flagInfo = [
    { img: Flag1, code: "EN", lang: "English" },
    { img: Flag2, code: "JA", lang: "Japanese" },
    { img: Flag3, code: "RU", lang: "Russian" },
    { img: Flag4, code: "ZH", lang: "Chinese" },
  ]

  useEffect(() => {
    let menuLeft = document.getElementById("menuMore")?.offsetLeft
    let langLeft = document.getElementById("langMore")?.offsetLeft
    setMenuLeft(menuLeft ? menuLeft : 0)
    setLangLeft(langLeft ? langLeft : 0)
  }, [menuMore])

  const handleSignIn = () => { }

  return (
    <>
      <div className="items-center hidden md:grid" id="header">
        <div className="absolute flex z-0">
          <div onClick={() => handler('/')} className="cursor-pointer">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="flex justify-center" style={{ paddingLeft: padL + "px" }}>
          <div className="flex items-center">
            <div onClick={() => handler('ico')} className={getNavLinkClassName}>
              What is ICO
            </div>
            <div onClick={() => handler('solutions')} className={getNavLinkClassName}>
              Solutions
            </div>
            <div onClick={() => handler('whitepaper')} className={getNavLinkClassName}>
              WhitePaper
            </div>
            <div onClick={() => handler('tokenSale')} className={getNavLinkClassName}>
              Token Sale
            </div>
            <div onClick={() => handler('roadmap')} className={getNavLinkClassName}>
              Roadmap
            </div>
            <div id="menuMore" onMouseEnter={() => setMenuMore(true)} onMouseLeave={() => setMenuMore(false)} className={getNavLinkClassName}>
              More
              <ChevronDownIcon className="w-6 h-6" />
            </div>
            <div id="moreMenu" onMouseEnter={() => setMoreMenu('MENU')} onMouseLeave={() => setMenuMore(false)} className={`${menuMore ? "opacity-1 scale-y-100" : "opacity-0 scale-y-0"} origin-top grid transition-all duration-300 absolute bg-[rgba(240,240,240,0.9)] backdrop-blur-sm px-2 py-1.5 w-[180px] rounded-[0.25rem] drop-shadow-lg"`} style={{ left: menuLeft, top: menuMore ? 90 : 80 }}>
              <div onClick={() => handler('mobile')} className={moreClassName}><ChevronRightIcon width={20} height={20} /> Mobile App</div>
              <div onClick={() => handler('ourCoin')} className={moreClassName}><ChevronRightIcon width={20} height={20} /> Our Coin</div>
              <div onClick={() => handler('tokenDistribution')} className={moreClassName}><ChevronRightIcon width={20} height={20} /> Token Distribution</div>
              <div onClick={() => handler('team')} className={moreClassName}><ChevronRightIcon width={20} height={20} /> Team</div>
            </div>
            <div id="langMore" onMouseEnter={() => setLangMore(true)} onMouseLeave={() => setLangMore(false)} className={`${getNavLinkClassName} flex flex-rows`}>
              <div className="flex items-center w-16">
                <img src={flagInfo[uiLang].img} className="w-full w-8 h-8" alt={flagInfo[uiLang].code} />
                <div className="ml-2 font-[700] tracking-widest">{flagInfo[uiLang].code}</div>
              </div>
              <ChevronDownIcon className="w-6 h-6" />
            </div>
            <div id="moreLang" onMouseEnter={() => setMoreMenu('LANG')} onMouseLeave={() => setLangMore(false)} className={`${langMore ? "opacity-1 scale-y-100" : "opacity-0 scale-y-0"} origin-top grid transition-all duration-300 absolute bg-[rgba(240,240,240,0.9)] backdrop-blur-sm px-3 py-2 w-[160px] rounded-[0.25rem] drop-shadow-lg"`} style={{ left: langLeft, top: langMore ? 90 : 80, boxShadow: "-1px 2px 15px 0 rgb(0 0 0 / 20%)" }}>
              {flagInfo.map((item, i) =>
                <div key={i} onClick={() => { setUiLang(i); setLangMore(false) }} className={moreClassName}>
                  <div className="flex items-center gap-2">
                    <img src={item.img} className="w-full w-8 h-8" alt={item.lang} />
                    <div>{item.lang}</div>
                  </div>
                </div>
              )}
            </div>
            <CommonButton title="Sign In" handler={handleSignIn} isSmall />
          </div>
        </div>
      </div >
      <div className="items-center justify-between flex md:hidden mx-5">
        <div className="grid gap-1 hover:scale-105 active:scale-95" onClick={() => setIsOpen(!isOpen)}>
          <hr className="w-[24px]" style={{ border: '2px solid white' }} />
          <hr className="w-[24px]" style={{ border: '2px solid white' }} />
          <hr className="w-[24px]" style={{ border: '2px solid white' }} />
        </div>
        <div className="flex z-0">
          <div onClick={() => handler('/')} className="cursor-pointer">
            <img src={LogoSM} alt="logo" />
          </div>
          <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            position="left"
          >
            <div className="demo-content">
              <button type="button" onClick={() => setIsOpen(false)}>
                Close
              </button>
              <p>The drawer content!</p>
              <input type="text" />
            </div>
          </Drawer>
        </div>
      </div>
    </>
  )
}

export default Header
