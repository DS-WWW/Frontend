import React, { useState } from 'react';
import HospitalList from '../components/HospitalList';
import KakaoMap from '../components/KakaoMap';
import "../css/HospitalMap.css"
import search from '../images/search.png'

const HospitalMap = () => {
  const [hospital, setHospital] = useState("");

  return (
    <>
      <div className='hospital-map'>
        <text className='title'>동물병원 지도</text>
      </div>
      <KakaoMap />
      <div>
        <div className='hospital-search'>
          <text className='title'>동물병원 찾기</text>
        </div>
        <div className='search'>
          <input className='search-input' onChange={setHospital} placeholder='장소를 입력하세요.' />
          <button className='btn-search'><img src={search} /></button>
        </div>
        <HospitalList />
      </div>
    </>
  );
}

export default HospitalMap;
