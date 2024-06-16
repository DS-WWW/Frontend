import React from 'react';
import '../css/Cardnews.css'; // Cardnews.css를 import

const news = ({ image, text, url }) => {

  const handleClick = () => {
    window.open(url, '_blank')
  }

    return (
      <div className="card" onClick={handleClick}>
        <div>
          <img src={image} alt={text} className="card-image" />
          <div className="card-content">
            <div className='card-text'>{text}</div>
          </div>
        </div>
      </div>
    );
  };

export default news;
