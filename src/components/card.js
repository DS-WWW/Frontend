// src/components/Card.js

import React from 'react';
import '../css/Card.css';

const Card = ({ text1, text2, image }) => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;

  return (
    <div className="card">
      <div>
        <div className="card-content">{formattedDate}</div>
        <div className="card-content">{text1}</div>
        <img src={image} alt="Card" className="card-image" />
      </div>
    </div>
  );
};

export default Card;
