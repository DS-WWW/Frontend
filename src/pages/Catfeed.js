import React from 'react';
import CatfeedList from '../components/CatfeedList';
import KakaoMap from '../components/KakaoMap';
import "../css/Catfeed.css"

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
      <KakaoMap />
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
