import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Header from '../../components/Header'
import { HomeComponent, IOCComponent, MobileAppComponent, OurCoinComponent, RoadmapComponent, SolutionsComponent, TeamComponent, TokenDistributionComponent, TokenSaleComponent, WhitepaperComponent } from '../../components/DynaComponent'
import Footer from '../../components/Footer'
import { ScrollUpButton } from '../../components/ButtonComponent'

const Home: React.FC = () => {

  const [showButton, setShowButton] = useState(false);
  // const [offset, setOffset] = useState(0);

  const location = useLocation();
  const history = useHistory()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // setOffset(window.pageYOffset > 500 ? 500 : window.pageYOffset);
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleGoSection = (index: string) => {
    if (location.pathname === '/') {
      const element: any = document.getElementById(index)
      const topPos = element.offsetTop
      let headerHeight: any = document.getElementById('header')?.offsetHeight
      if (headerHeight === 0) headerHeight = 70
      window.scrollTo({
        top: topPos - headerHeight,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      history.push('/' + index)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="m-auto">
      <Header handler={handleGoSection} />
      <HomeComponent handler={handleGoSection} />
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
      <ScrollUpButton handler={scrollToTop} showButton={showButton} />
    </div>
  )
}

export default Home