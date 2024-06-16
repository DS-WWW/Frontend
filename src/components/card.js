import React from 'react';
import '../css/Card.css';

// 어디에 사용되는 컴포넌트인지?

const Card = ({ text1, text2, image }) => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;

  return (
    <div className="card">
      <div>
        <div className="card-content">{formattedDate}</div>
        <div className="card-content">{text1} 이건</div>
        <img src={image} alt="Card" className="card-image" />
      </div>
    </div>
  );
};

export default Card;
