import React from 'react';
import CatfeedList from '../components/CatfeedList';
import KakaoMap from '../components/KakaoMap';
import "../css/Catfeed.css"


const catfeedMarkers = [
  {
    "_id": "66479a37d1102f465b0ba554",
    "name": "덕성여자대학교 정문",
    "lat": 37.651563,
    "lng": 127.015043,
    "feed": 50,
    "water": 170,
    "time": "2024-05-02T11:00:00.000Z"
  },
  {
    "_id": "66479aa9d1102f465b0ba556",
    "name": "덕성여자대학교 도서관",
    "lat": 37.652643,
    "lng": 127.015841,
    "feed": 60,
    "water": 150,
    "time": "2024-05-02T10:00:00.000Z"
  },
  {
    "_id": "66479ae9d1102f465b0ba558",
    "name": "덕성여자대학교 차미리사기념관",
    "lat": 37.653239,
    "lng": 127.016271,
    "feed": 70,
    "water": 130,
    "time": "2024-05-03T12:00:00.000Z"
  }
]

const Catfeed = () => {

  const today = new Date()
  const formattedYear = today.getFullYear().toString().slice(-2);
  const formattedDate = `${formattedYear}.${today.getMonth() + 1}.${today.getDate()}. ${today.getHours()}시 기준`

  return (
    <>
      <div className='catfeed-map'>
        <text className='title'>고양이 급식소 현황</text>
        <div className='time'>{formattedDate}</div>
      </div>
      <KakaoMap markers={catfeedMarkers} />
      <div>
        <div className='catfeed-list'>
          <text className='title'>급식소 목록</text>
        </div>
        {catfeedMarkers.map((marker, index) => (
          <CatfeedList key={marker._id} marker={marker} index={index + 1} />
        ))}
      </div>
    </>
  );
}

export default Catfeed;