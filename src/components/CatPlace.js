import React, { useState, useEffect } from 'react';
import '../css/CatPlace.css';
import catImage from '../images/cat.png';

const CatPlace = (props) => {
  const [cats, setCats] = useState(props.data)

  useEffect(() => {
    setCats(props.data)
  }, [props.data])

  return (
    <div className='cat-place-container'>
      {cats.map((cat, index) => (
        <div key={index} className='place-container'>
          <div className='find-date'>{cat.time}</div>
          <div className='find-place'>{cat.title}</div>
          <div className='place-img'>
            <img src={catImage} alt='cat' className='cat-img' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatPlace;