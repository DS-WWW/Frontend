import React from 'react';
import { useNavigate } from "react-router-dom";
import "../css/CatfeedList.css"
import catIcon from "../images/catIcon.png"

const CatfeedList = ({ marker, index }) => {

  const navigate = useNavigate()

  const feedInfo = () => {
    navigate(`/Catfeed/CatfeedDetail/${marker._id}`)
  }

  return (
    <div className='list'>
      <div className='feed'>
        {/* <div className='number'>1</div> */}
        <img className='cat-icon' src={catIcon} alt="" /> 
        <div className='feed-content'>{marker.name}</div>
      </div>
      <div className='feed'>
        <div className='feed-content'>사료 {marker.feed}g, 물 {marker.water}ml</div>
        <button className='check-btn' onClick={feedInfo}>급식소 확인</button>
      </div>
    </div>
  )
}

export default CatfeedList;
