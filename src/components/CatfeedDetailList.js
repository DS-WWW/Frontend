import React from 'react';
import "../css/CatfeedDetailList.css"


const CatfeedDetailList = ({ props }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const padZero = (num) => num.toString().padStart(2, '0')
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}(일) ${padZero(date.getHours())}:${padZero(date.getMinutes())}`
  }
  
  return (
    <div className='detail-list'>
      <div className='feed-container'>
        <div className='hourly-info'>{formatDate(props.time)} 사료 {props.feed}g, 물 {props.water}ml</div>
      </div>
      <div className='feed-container'>
        <div className='warning'>{props.alert}</div>
      </div>
    </div>
  )
}

export default CatfeedDetailList;
