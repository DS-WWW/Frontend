// src/pages/Catcamera.js

import React, { useState } from 'react';
import Card from '../components/card';
import '../css/Card.css';
import '../css/Catcamera.css';

const Catcamera = () => {
  const cardsPerPage = 6;
  const totalCards = 18; // 총 카드 수를 설정
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 해당하는 카드들을 계산
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // 페이지 변경 함수
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const currentCards = Array.from({ length: totalCards }).slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="container">
      <div className="header">
        <div className="title">방명록</div>
        <button className="filter-btn">도서관</button>
        <button className="filter-btn">정문</button>
        <button className="filter-btn">차미리사관</button>
        <button className="filter-btn">자연관</button>


      </div>
      <div className="grid-container">
        {currentCards.map((_, index) => (
          <Card key={index} text1="덕성여대" text2="2024" image={`image-url-${index + 1}.jpg`} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Catcamera;
