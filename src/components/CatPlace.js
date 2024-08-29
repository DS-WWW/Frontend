import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import '../css/CatPlace.css';

const CatPlace = (props) => {
  const [cats, setCats] = useState(props.data);

  useEffect(() => {
    setCats(props.data);
  }, [props.data]);

  return (
    <div className='cat-place-container'>
      {cats.map((cat, index) => (
        <div key={index} className='place-container'>
          <div className='find-date'>{cat.time}</div>
          <div className='find-place'>{cat.animal}</div>
          <div className='place-img'>
            <LazyLoad height={200} offset={100} once>
              <img src={cat.img} alt='cat' className='cat-img' />
            </LazyLoad>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatPlace;
