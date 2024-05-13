import React from 'react';
import { useNavigate } from "react-router-dom";
import "../css/CatfeedList.css"

const CatfeedList = () => {

  const navigate = useNavigate()

  const goCctv = () => {
    navigate('/Catcamera')
  }

  return (
    <div className='list'>
      <div className='feed'>
        <div className='number'>1</div>
        <text className='feed-content'>덕성여자대학교 도서관</text>
      </div>
      <div className='feed'>
        <text className='feed-content'>사료 110g, 물 50ml</text>
        <button className='check-btn' onClick={goCctv}>급식소 확인</button>
      </div>
    </div>
  );
}

export default CatfeedList;
