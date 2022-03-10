import React from 'react'
import { HomeComponent } from 'components/DynaComponent'
import IllustComponent from 'components/IllustComponent'
import ilustrPoorarkitectr1 from 'assets/svg/ilustrPoorarkitectr1.svg'
import ilustrWebinsegura2 from 'assets/svg/ilustrWebinsegura2.svg'
import ilustr9 from 'assets/svg/ilustr9.png'
import ilustrBadservice1 from 'assets/svg/ilustrBadservice1.svg'
import ilustrBadlenguagesupport1 from 'assets/svg/ilustrBadlenguagesupport1.svg'

const Home: React.FC = () => {
  return (
    <div className='pt-[97px] m-auto'>
      <div className="grid m-44">
        <HomeComponent />
      </div>
      <div className="grid gap-52 mx-44">
        <IllustComponent illust={ilustrPoorarkitectr1} title="POOR TECHNICAL ARCHITECTURE" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
        <IllustComponent illust={ilustrWebinsegura2} title="INSECURE PLATFORM" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." isRTL />
        <IllustComponent illust={ilustr9} title="POOR MARKET LIQUIDITY" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
        <IllustComponent illust={ilustrBadservice1} title="POOR CUSTOMER SERVICE" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." isRTL />
        <IllustComponent illust={ilustrBadlenguagesupport1} title="POOR INTERNATIONALIZATION AND LANGUAGE SUPPORT" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit sem suspendisse urna integer est. Ipsum vitae eu dui augue viverra. Enim purus erat commodo eleifend nec enim, ridiculus arcu in. Volutpat, aliquam consequat nulla lorem mauris. Adipiscing mauris eu ultrices et, volutpat, enim. Vitae pretium proin neque neque purus tellus ultrices accumsan. Habitant tellus faucibus volutpat viverra." />
      </div>
    </div>
  );
}

export default Home;