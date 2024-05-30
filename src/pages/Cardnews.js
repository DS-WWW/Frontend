// src/pages/Cardnews.js

import React from 'react';
import News from '../components/news'; // 정확한 파일 이름 지정
import '../css/Cardnews.css';

const Cardnews = () => {

  return (
    <div className="grid-container">
       <News/>
       <News/>
       <News/>
       <News/>
       <News/>
       <News/>
       <News/>
       <News/>

    </div>
  );
};

export default Cardnews;
