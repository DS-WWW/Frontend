import React from 'react';
import { useNavigate } from "react-router-dom";
import "../css/HospitalList.css"

const HospitalList = () => {

  // const navigate = useNavigate()

  // const goCctv = () => {
  //   navigate('/Catcamera')
  // }

  return (
    <div className='list'>
      <div className='hospital'>
        <text className='content'>대형동물병원</text>
      </div>
      <div className='hospital'>
        <text className='content'>서울특별시 강북구 한천로 1135 대형동물병원</text>
        <button className='detail-btn'>대형동물병원</button>
      </div>
    </div>
  );
}

export default HospitalList;
