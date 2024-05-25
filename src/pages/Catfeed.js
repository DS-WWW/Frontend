import React from 'react';
import CatfeedList from '../components/CatfeedList';
import KakaoMap from '../components/KakaoMap';
import "../css/Catfeed.css"


const catfeedMarkers = [
  {
    name: "덕성여자대학교 정문",
    lat: 37.651563,
    lng: 127.015043
  },
  {
    name: "덕성여자대학교 도서관",
    lat: 37.652643,
    lng: 127.015841
  },
  {
    name: "덕성여자대학교 차미리사기념관",
    lat: 37.653239,
    lng: 127.016271
  }
]

const Catfeed = () => {

  const today = new Date()
  const formattedYear = today.getFullYear().toString().slice(-2);
  const formattedDate = `${formattedYear}.${today.getMonth() + 1}.${today.getDate()} ${today.getHours()}시 기준`

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
        <CatfeedList />
        <CatfeedList />
        <CatfeedList />
        <CatfeedList />
      </div>
    </>
  );
}

export default Catfeed;
