import React, { useState, useEffect } from 'react';
import HospitalList from '../components/HospitalList';
import KakaoMap from '../components/KakaoMap';
import "../css/HospitalMap.css"
import search from '../images/search.png'

//각 병원의 url 추가하기
const hospitalMarkers = [
  {
    "_id": "664576d8ecdb4286c0c877b6",
    "name": "대형동물병원",
    "address": "서울 강북구 한천로 1135 대형동물병원",
    "lat": 37.646321,
    "lng": 127.018156,
    "url": "https://map.naver.com/p/entry/place/11493624?c=15.00,0,0,0,dh"

  },
  {
    "_id": "664576d8ecdb4286c0c877b7",
    "name": "동물병원비아츠",
    "address": "서울 도봉구 우이천로 446-3 1층 일부",
    "lat": 37.653371,
    "lng": 127.017121,
    "url": "https://map.naver.com/p/entry/place/1742286528?c=15.00,0,0,0,dh"
  },

]

const HospitalMap = () => {
  const [hospital, setHospital] = useState("")
  const [filteredMarkers, setFilteredMarkers] = useState(hospitalMarkers)

  const handleSearch = () => {
    const filter = hospital
    const filteredData = hospitalMarkers.filter(marker => {
      return marker.name.includes(filter) || marker.address.includes(filter);
    })
    setFilteredMarkers(filteredData)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <>
      <div className='hospital-map'>
        <text className='title'>동물병원 지도</text>
      </div>
      <KakaoMap markers={hospitalMarkers} />
      <div>
        <div className='hospital-search'>
          <text className='title'>동물병원 찾기</text>
        </div>
        <div className='search'>
          <input
            className='search-input'
            onChange={(e) => setHospital(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='장소를 입력하세요.' />
          <button className='btn-search' onClick={handleSearch} ><img src={search} alt="search" /></button>
        </div>
        {filteredMarkers.map((marker) => (
          <HospitalList key={marker._id} marker={marker} />
        ))}
      </div>
    </>
  );
}

export default HospitalMap;
