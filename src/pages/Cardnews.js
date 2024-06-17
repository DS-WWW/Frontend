import React from 'react';
import News from '../components/news';
import '../css/Cardnews.css';
import aboutCatData from '../data/aboutCatData.json';

const Cardnews = () => {
  return (
    <>
      <div className='about-cats'>
        <div className='title'>All about Cats</div>
      </div>
      <div className="grid-container">
      {aboutCatData.map((item, index) => (
        <News
          key={index}
          image={item.image}
          text={item.text}
          url={item.url} />
      ))}
      </div>
    </>
  );
};

export default Cardnews;
