import React, { memo } from 'react';
import HomeNavbar from './components/HomeNavbar';
import HomeHeroBanner from './components/HomeHeroBanner';
import HomeCollectionGrid from './components/HomeCollectionGrid';
import HomeProductSection from './components/HomeProductSection';
import HomeDealOfTheWeek from './components/HomeDealOfTheWeek';
import HomeFooter from './components/HomeFooter';

const HomePage = memo(() => {
  return (
    <div className="homepage-wrapper">
      <HomeNavbar />
      <main>
        <HomeHeroBanner />
        <HomeCollectionGrid />
        <HomeProductSection />
        <HomeDealOfTheWeek />
      </main>
      <HomeFooter />
    </div>
  );
});

HomePage.displayName = 'HomePage';
export default HomePage;
