import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CatfeedList from '../components/CatfeedList';
import KakaoMap from '../components/KakaoMap';
import "../css/Catfeed.css"

const Catfeed = () => {
  const [catfeedMarkers, setCatfeedMarkers] = useState([])

  useEffect(() => {
    const getCatfeedData = async () => {
      try {
        const response = await axios.get('/api/feedStation')
        if (response.data.success) {
          setCatfeedMarkers(response.data.stations)
        } else {
          console.error('Error: Data fetch was not successful.')
        }
      } catch (error) {
        console.error('Error fetching catfeed data:', error)
      }
    };
    getCatfeedData()
  }, []);

  const today = new Date()
  const formattedYear = today.getFullYear().toString().slice(-2);
  const formattedDate = `${formattedYear}.${today.getMonth() + 1}.${today.getDate()}. ${today.getHours()}시 기준`

  return (
    <>
      <div className='catfeed-map'>
        <div className='title'>고양이 급식소 현황</div>
        <div className='time'>{formattedDate}</div>
      </div>
      <KakaoMap markers={catfeedMarkers} />
      <div>
        <div className='catfeed-list'>
          <div className='title'>급식소 목록</div>
        </div>
        {catfeedMarkers.map((marker, index) => (
          <CatfeedList key={marker._id} marker={marker} index={index + 1} />
        ))}
      </div>
    </>
  );
}

export default Catfeed;