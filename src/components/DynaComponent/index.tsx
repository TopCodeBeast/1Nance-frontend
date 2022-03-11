import IllustComponent from '../../components/IllustComponent'
import ilustrHome1nance1 from '../../assets/svg/ilustrHome1nance1.svg'
import ilustrWhatisICO1 from '../../assets/svg/ilustrWhatisICO1.svg'
import ilustrPoorarkitectr1 from '../../assets/svg/ilustrPoorarkitectr1.svg'
import ilustrWebinsegura2 from '../../assets/svg/ilustrWebinsegura2.svg'
import ilustr9 from '../../assets/png/ilustr9.png'
import ilustrBadservice1 from '../../assets/svg/ilustrBadservice1.svg'
import ilustrBadlenguagesupport1 from '../../assets/svg/ilustrBadlenguagesupport1.svg'
import _1nanceWhite from '../../assets/svg/_1nanceWhite.svg'
import ilustrAppMobile1 from '../../assets/svg/ilustrAppMobile1.svg'
import Capa2 from "../../assets/svg/Capa2.svg"
import subir1 from "../../assets/svg/subir1.svg"
import change1 from "../../assets/svg/change1.svg"
import ilustrOurCoin1 from "../../assets/svg/ilustrOurCoin1.svg"
import ilustGraficFunds1 from "../../assets/svg/ilustGraficFunds1.svg"

import USFlag from "../../assets/png/estados-unidos1.png"
import android1 from "../../assets/png/android1.png"
import apple1 from "../../assets/png/apple1.png"

import { CommonButton, DownloadButton } from '../../components/ButtonComponent'
import TitleComponent from './TitleComponent'
import { TokenSaleStepComponent } from '../../components/StepComponent'
import ArrowComponent from './ArrowComponent'
import MemberComponent from '../../components/MemberComponent'

export const HomeComponent = () => {
  return (
    <div className="grid m-24">
      <div className="flex m-auto items-center">
        <div className="grid w-1/2 justify-items-end gap-12">
          <p className="font-medium text-4xl text-center leading-[46.88px] px-6 w-4/5 place-items-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex gap-3 w-4/5 justify-center">
            <CommonButton title="Purchase Token" className="text-[24px] leading-[28px] py-4" />
            <CommonButton title="Whitepaper" className="text-[24px] leading-[28px] py-4" />
          </div>
        </div>
        <div className="w-1/2">
          <img src={ilustrHome1nance1} alt="Home ilustr" />
        </div>
      </div>
    </div>
  )
}

export const IOCComponent = () => {
  return (
    <div className="grid m-24">
      <TitleComponent anchor="ico" title="What is Crypto ICO" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex m-auto items-center space-x-12">
        <div className="grid w-1/2 justify-items-end">
          <p className="font-medium text-[24px] text-center leading-[28.13px] px-6 w-2/3 place-items-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra.</p>
        </div>
        <div className="w-1/2">
          <img src={ilustrWhatisICO1} alt="IOC ilustr" />
        </div>
      </div>
    </div>
  )
}

export const SolutionsComponent = () => {
  return (
    <div className="grid m-36">
      <TitleComponent anchor="solutions" title="Problems and Solutions" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="grid gap-48 mt-24">
        <IllustComponent illust={ilustrPoorarkitectr1} title="POOR TECHNICAL ARCHITECTURE" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
        <IllustComponent illust={ilustrWebinsegura2} title="INSECURE PLATFORM" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." isRTL />
        <IllustComponent illust={ilustr9} title="POOR MARKET LIQUIDITY" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
        <IllustComponent illust={ilustrBadservice1} title="POOR CUSTOMER SERVICE" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." isRTL />
        <IllustComponent illust={ilustrBadlenguagesupport1} title="POOR INTERNATIONALIZATION AND LANGUAGE SUPPORT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
      </div>
    </div>
  )
}

export const WhitepaperComponent = () => {
  return (
    <div className="grid m-36">
      <TitleComponent anchor="whitepaper" title="White Paper" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex m-auto items-center gap-24 mt-20">
        <div className="flex min-w-[30%] justify-center"><img src={_1nanceWhite} alt="IOC ilustr" /></div>
        <div className="flex-row space-y-12">
          <div className="font-light text-[24px] leading-[28.13px] max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra.</div>
          <div className="w-full justify-items-start">
            <DownloadButton lang="English" flag={USFlag} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const TokenSaleComponent = () => {
  return (
    <div className="grid m-36">
      <TitleComponent anchor="tokenSale" title="Token Sale" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex items-center gap-16 mt-20">
        <div className="grid w-1/2 h-full align-center justify-items-end">
          <div className="grid justify-items-end rounded-[16px] p-10 pt-20 w-full h-full bg-gradient-to-b from-[#FFAF10] to-[#F97919]">
            <div className="w-full bg-white h-20"></div>
            <div className="flex w-full justify-center gap-24 mt-12">
              <TokenSaleStepComponent name="Pre-Sale" />
              <TokenSaleStepComponent name="Soft Cap" />
              <TokenSaleStepComponent name="Bonus" />
            </div>
            <div className="w-full bg-white rounded-full p-1.5 px-2"><div className="bg-gradient-to-r from-[#03185B] to-[#0040C1] rounded-[8px] w-2/3 h-6"></div></div>
            <div className="grid justify-items-center mt-12 w-full" ><CommonButton title="Purchase Token" className="from-[#03185B] to-[#133295] text-white font-[500] rounded-[16px] text-[24px] leading-[28px] min-w-[250px] py-4" /></div>
          </div>
        </div>
        <div className="flex-row w-1/2 space-y-12">
          <div className="font-light text-[24px] leading-[28.13px] w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida.</div>
          <div className="grid grid-cols-2 w-full justify-items-start gap-y-4">
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
            <ArrowComponent content="Lorem ipsum dolor sit amet," emphasize="consectetur adipiscing elit." />
          </div>
        </div>
      </div>
    </div>
  )
}

export const MobileAppComponent = () => {
  return (
    <div className="grid m-36">
      <TitleComponent anchor="mobileApp" title="Mobile App" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex items-center gap-16 m-auto mt-20">
        <div className="flex-row space-y-4">
          <div className="font-bold uppercase text-[28px] leading-[32.81px] max-w-xl">ANDROID &amp; IOS APP</div>
          <div className="font-light text-[24px] leading-[28.13px] max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra.</div>
          <div className="grid max-w-xl gap-y-8 pt-8">
            <div className="flex gap-2 items-center text-[20px]"><img src={Capa2} alt="Capa2" />Live crypto rate</div>
            <div className="flex gap-2 items-center text-[20px]"><img src={subir1} alt="subir1" />Latest cryptocurrency news</div>
            <div className="flex gap-2 items-center text-[20px]"><img src={change1} alt="change1" />Cryptocurrenci exchange</div>
          </div>
          <div className="flex gap-3 w-4/5 justify-center pt-8">
            <CommonButton title="Android" className="px-8 text-[28px] leading-[32.81px] font-block" icon={android1} />
            <CommonButton title="Apple" className="px-10 text-[28px] leading-[32.81px] font-black" icon={apple1} />
          </div>
        </div>
        <div className="flex min-w-[30%] justify-center"><img src={ilustrAppMobile1} alt="Illustrs" /></div>
      </div>
    </div>
  )
}

export const RoadmapComponent = () => {
  return (
    <div className="grid my-36">
      <TitleComponent anchor="roadmap" title="Roadmap" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="grid gap-16 mt-20 bg-[url('./assets/svg/roadmap1nance1.svg')] bg-center bg-no-repeat min-h-[860px]">
      </div>
    </div>
  )
}

export const OurCoinComponent = () => {
  return (
    <div className="grid m-36">
      <TitleComponent anchor="ourCoin" title="Our Coin" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex items-center gap-16 m-auto mt-20">
        <IllustComponent illust={ilustrOurCoin1} title="1NANCE COIN" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
      </div>
    </div>
  )
}

export const TokenDistributionComponent = () => {
  return (
    <div className="grid m-36">
      <TitleComponent anchor="tokenDistribution" title="Token Distribution" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex items-center gap-16 m-auto mt-20">
        <IllustComponent illust={ilustGraficFunds1} title="1NANCE COIN" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." isRTL />
      </div>
    </div>
  )
}

export const TeamComponent = () => {
  return (
    <div className="grid m-36">
      <TitleComponent anchor="team" title="Team" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex items-center justify-items-center gap-48 m-auto mt-20">
        <MemberComponent name="Logan S.Peréz" role="CEO and CFO" />
        <MemberComponent name="Logan S.Peréz" role="CEO and CFO" />
        <MemberComponent name="Logan S.Peréz" role="CEO and CFO" />
      </div>
      <div className="flex items-center justify-items-center gap-48 m-auto mt-20">
        <MemberComponent name="Logan S.Peréz" role="CEO and CFO" />
        <MemberComponent name="Logan S.Peréz" role="CEO and CFO" />
      </div>
    </div>
  )
}