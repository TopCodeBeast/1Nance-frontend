import { IconButton } from "../../components/ButtonComponent"
import twitter from "../../assets/svg/twitter.svg"
import telegram from "../../assets/svg/telegram.svg"
import facebook from "../../assets/svg/facebook.svg"
import reddit from "../../assets/svg/reddit.svg"
import backpattern from "../../assets/svg/footerframe1.svg"
import logoSM from "../../assets/png/logoSM.png"

const Footer: React.FC = () => {

  const handleLink = (index: any) => { }

  return (
    <div className="w-full mt-64">
      <img src={backpattern} className="w-full" alt="back" />
      <div className="flex gap-12 justify-center -mt-32 content-center">
        <IconButton handler={handleLink('twitter')} icon={twitter} />
        <IconButton handler={handleLink('telegram')} icon={telegram} />
        <IconButton handler={handleLink('facebook')} icon={facebook} />
        <IconButton handler={handleLink('reddit')} icon={reddit} />
      </div>
      <img src={logoSM} className="mt-[-240px] ml-32" alt="logo" />
    </div>
  )
}

export default Footer