import React from 'react'
import Header from '../../components/Header'
import { HomeComponent, IOCComponent, MobileAppComponent, OurCoinComponent, RoadmapComponent, SolutionsComponent, TeamComponent, TokenDistributionComponent, TokenSaleComponent, WhitepaperComponent } from '../../components/DynaComponent'
import Footer from '../../components/Footer'

const Home: React.FC = () => {
  return (
    <div className="m-auto">
      <Header />
      <HomeComponent />
      <IOCComponent />
      <SolutionsComponent />
      <WhitepaperComponent />
      <TokenSaleComponent />
      <MobileAppComponent />
      <RoadmapComponent />
      <OurCoinComponent />
      <TokenDistributionComponent />
      <TeamComponent />
      <Footer />
    </div>
  )
}

export default Home