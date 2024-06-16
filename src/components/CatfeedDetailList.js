import React from 'react';
import "../css/CatfeedDetailList.css"


const CatfeedDetailList = ({ props }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString.replace(' KST', ''))
    const days = ['일', '월', '화', '수', '목', '금', '토']
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const dayOfWeek = days[date.getDay()]
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${year}.${month}.${day}(${dayOfWeek}) ${hours}:${minutes}`
  }
  
  const getWarningMessage = () => {
    const { weight, water_level } = props
    if (weight <= 50 && water_level <= 100) {
      return '사료, 물 부족!'
    } else if (weight <= 50) {
      return '사료 부족!'
    } else if (water_level <= 100) {
      return '물 부족!'
    } else {
      return ''
    }
  }

  return (
    <div className='detail-list'>
      <div className='feed-container'>
        <div className='hourly-info'>{formatDate(props.time)} 사료 {props.weight}g, 물 {props.water_level}ml</div>
      </div>
      <div className='feed-container'>
        <div className='warning'>{getWarningMessage()}</div>
      </div>
    </div>
  )
}

export default CatfeedDetailList;
