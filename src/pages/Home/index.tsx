import React from 'react'
import Header from 'components/Header'
import { HomeComponent, IOCComponent, SolutionsComponent, TokenSaleComponent, WhitepaperComponent } from 'components/DynaComponent'

const Home: React.FC = () => {
  return (
    <div className="m-auto">
      <Header />
      <HomeComponent />
      <IOCComponent />
      <SolutionsComponent />
      <WhitepaperComponent />
      <TokenSaleComponent />
    </div>
  )
}

export default Home