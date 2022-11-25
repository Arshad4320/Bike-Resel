import React from 'react';
// import Category from '../../Category/Category';
import CategoryButton from '../../Category/CategoryButton';
import Banner from '../Banner/Banner';
import SpecialCollection from '../SpecialCollection/SpecialCollection';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          {/* <Category></Category> */}
          <CategoryButton></CategoryButton>
          <SpecialCollection></SpecialCollection>
        </div>
    );
};

export default Home;