import React from 'react';
import Category from '../../Category/Category';
import Banner from '../Banner/Banner';
import SpecialCollection from '../SpecialCollection/SpecialCollection';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <SpecialCollection></SpecialCollection>
        </div>
    );
};

export default Home;