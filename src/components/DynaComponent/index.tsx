import IllustComponent from 'components/IllustComponent'
import ilustrHome1nance1 from 'assets/svg/ilustrHome1nance1.svg'
import ilustrWhatisICO1 from 'assets/svg/ilustrWhatisICO1.svg'
import ilustrPoorarkitectr1 from 'assets/svg/ilustrPoorarkitectr1.svg'
import ilustrWebinsegura2 from 'assets/svg/ilustrWebinsegura2.svg'
import ilustr9 from 'assets/png/ilustr9.png'
import ilustrBadservice1 from 'assets/svg/ilustrBadservice1.svg'
import ilustrBadlenguagesupport1 from 'assets/svg/ilustrBadlenguagesupport1.svg'
import Button from 'components/Button'
import TitleComponent from './TitleComponent'

export const HomeComponent = () => {
  return (
    <div className="grid m-24">
      <div className="flex m-auto items-center">
        <div className="grid w-1/2 justify-items-end gap-12">
          <p className="font-medium text-4xl text-center leading-[46.88px] px-6 w-4/5 place-items-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex gap-3 w-4/5 justify-center">
            <Button title="Purchase Token" />
            <Button title="Whitepaper" />
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
    <div className="grid m-36">
      <TitleComponent anchor="ico" title="What is Crypto ICO" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt ac nisl pellentesque id tellus gravida." />
      <div className="flex m-auto items-center space-x-12 my-16">
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
    <div className="grid m-44 gap-52">
      <IllustComponent illust={ilustrPoorarkitectr1} title="POOR TECHNICAL ARCHITECTURE" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
      <IllustComponent illust={ilustrWebinsegura2} title="INSECURE PLATFORM" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." isRTL />
      <IllustComponent illust={ilustr9} title="POOR MARKET LIQUIDITY" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
      <IllustComponent illust={ilustrBadservice1} title="POOR CUSTOMER SERVICE" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." isRTL />
      <IllustComponent illust={ilustrBadlenguagesupport1} title="POOR INTERNATIONALIZATION AND LANGUAGE SUPPORT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
    </div>
  )
}