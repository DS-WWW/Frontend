import React from 'react';
import "../css/HospitalList.css"

const HospitalList = ({ marker }) => {

  const handleDetailClick = () => {
    window.open(marker.url, '_blank')
  }

  return (
    <div className='list'>
      <div className='hospital'>
        <text className='content'>{marker.name}</text>
      </div>
      <div className='hospital'>
        <text className='content'>{marker.address}</text>
        <button className='detail-btn' onClick={handleDetailClick}>{marker.name}</button>
      </div>
    </div>
  );
}

export default HospitalList;
