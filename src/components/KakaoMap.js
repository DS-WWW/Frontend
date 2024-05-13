import React, {useEffect} from 'react';
import "../css/KakaoMap.css"
const { kakao } = window;

const KakaoMap = () => {

  useEffect(() => {
    const container = document.getElementById("map")
    const options = {
      center: new kakao.maps.LatLng(37.6511988 , 127.0161604),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
  }, []);

  return (
    <>
      <div id='map' className='map-size'></div>
    </>
  );
}

export default KakaoMap;
