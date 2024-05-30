// src/components/News.js

import React from 'react';
import '../css/Cardnews.css'; // Cardnews.css를 import

const news = ({image, text }) => {
    return (
      <div className="card">
        <div>
          <div className="card-image">{image}</div>
          <div className="card-content">{text}</div>
        </div>
      </div>
    );
  };

export default news;
