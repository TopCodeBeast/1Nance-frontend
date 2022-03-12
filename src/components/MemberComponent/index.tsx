import linkedin from "../../assets/svg/linkedin.svg"
import { IconButton } from "../../components/ButtonComponent"

interface MemberComponentProps {
  profile?: any,
  name: any,
  role: any,
  handler?: any,
}

const MemberComponent: React.FC<MemberComponentProps> = ({ profile = null, name, role, handler }) => {
  return (
    <div className="grid justify-items-center gap-2">
      <div className="grid place-content-center align-middle rounded-full w-[220px] h-[220px] bg-gradient-radial from-[#E0790A] to-[#F9A74E]">
        <div className="bg-white w-[190px] h-[190px] rounded-full" >
          {profile && <img src={profile} alt="profile" />}
        </div>
      </div>
      <div className="grid justify-items-start gap-1">
        <p className="flex font-bold text-[24px]">{name}</p>
        <p className="flex text-[18px]">{role}</p>
        <IconButton handler={handler} icon={linkedin} className="w-[24px] h-[24px]" />
      </div>
    </div>
  )
}

export default MemberComponent