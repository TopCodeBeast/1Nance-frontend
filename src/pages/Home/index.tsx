import React from 'react'
import Header from 'components/Header'
import { HomeComponent, IOCComponent, SolutionsComponent } from 'components/DynaComponent'

const Home: React.FC = () => {
  return (
    <div className="m-auto">
      <Header />
      <HomeComponent />
      <IOCComponent />
      <SolutionsComponent />
    </div>
  )
}

export default Home