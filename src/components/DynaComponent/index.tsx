import IllustComponent from 'components/IllustComponent'
import ilustrHome1nance1 from 'assets/svg/ilustrHome1nance1.svg'
import ilustrWhatisICO1 from 'assets/svg/ilustrWhatisICO1.svg'
import ilustrPoorarkitectr1 from 'assets/svg/ilustrPoorarkitectr1.svg'
import ilustrWebinsegura2 from 'assets/svg/ilustrWebinsegura2.svg'
import ilustr9 from 'assets/png/ilustr9.png'
import ilustrBadservice1 from 'assets/svg/ilustrBadservice1.svg'
import ilustrBadlenguagesupport1 from 'assets/svg/ilustrBadlenguagesupport1.svg'
import _1nanceWhite from 'assets/svg/_1nanceWhite.svg'
import USFlag from "assets/png/estados-unidos1.png"

import { CommonButton, DownloadButton } from 'components/ButtonComponent'
import TitleComponent from './TitleComponent'
import { TokenSaleStepComponent } from 'components/StepComponent'

export const HomeComponent = () => {
  return (
    <div className="grid m-24">
      <div className="flex m-auto items-center">
        <div className="grid w-1/2 justify-items-end gap-12">
          <p className="font-medium text-4xl text-center leading-[46.88px] px-6 w-4/5 place-items-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex gap-3 w-4/5 justify-center">
            <CommonButton title="Purchase Token" />
            <CommonButton title="Whitepaper" />
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
          <div className="flex-row justify-items-end rounded-lg p-8 w-5/6 h-full bg-gradient-to-b from-[#FFAF10] to-[#F97919]">
            <div className="w-full bg-white h-20"></div>
            <div className="w-full justify-items-center gap-12">
              <TokenSaleStepComponent name="Pre-Sale" />
              <TokenSaleStepComponent name="Soft Cap" />
              <TokenSaleStepComponent name="Bonus" />
            </div>
            <div className="w-full bg-white rounded-full p-1.5"><div className="bg-gradient-to-r from-[#03185B] to-[#0040C1] rounded-full w-4/5 h-7"></div></div>
          </div>
        </div>
        <div className="flex-row w-1/2 space-y-12">
          <div className="font-light text-[24px] leading-[28.13px] max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra.</div>
          <div className="w-full justify-items-start">
          </div>
        </div>
      </div>
    </div>
  )
}