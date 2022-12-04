import React from 'react';
import Header from '../components/layout/Header';
import HomeBanner from '../modules/home/HomeBanner';
import PostNewestLarge from '../modules/post/PostNewestLarge';

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <PostNewestLarge />
    </>
  );
};

export default HomePage;