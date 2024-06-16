import React from 'react';
import "../css/HospitalList.css"

const HospitalList = ({ marker }) => {

  const handleDetailClick = () => {
    window.open(marker.url, '_blank')
  }

  return (
    <div className='list'>
      <div className='hospital'>
        <div className='content'>{marker.name}</div>
      </div>
      <div className='hospital'>
        <div className='content'>{marker.address}</div>
        <button className='detail-btn' onClick={handleDetailClick}>{marker.name}</button>
      </div>
    </div>
  );
}

export default HospitalList;
