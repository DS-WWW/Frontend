import React from 'react';
import { useNavigate } from "react-router-dom";
import "../css/CatfeedList.css"
import catIcon from "../images/catIcon.png"

const CatfeedList = ({ marker, index }) => {

  const navigate = useNavigate()

  const goCctv = () => {
    navigate('/Catcamera')
  }

  return (
    <div className='list'>
      <div className='feed'>
        {/* <div className='number'>1</div> */}
        <img className='cat-icon' src={catIcon} alt="" /> 
        <text className='feed-content'>{marker.name}</text>
      </div>
      <div className='feed'>
        <text className='feed-content'>사료 {marker.feed}g, 물 {marker.water}ml</text>
        <button className='check-btn' onClick={goCctv}>급식소 확인</button>
      </div>
    </div>
  )
}

export default CatfeedList;
