import React, {useEffect} from 'react';
import "../css/KakaoMap.css"
const { kakao } = window;

const KakaoMap = ({ markers }) => {

  useEffect(() => {
    const container = document.getElementById("map")
    const options = {
      center: new kakao.maps.LatLng(37.6511988 , 127.0161604),
      level: 4,
    }
    const map = new kakao.maps.Map(container, options)

    for (var i = 0; i < markers.length; i ++) {
      const position = new kakao.maps.LatLng(markers[i].lat, markers[i].lng);

      const content = document.createElement('div')
      content.className = 'custom-marker'
      content.innerHTML = `
        <div class="marker-title">${markers[i].name}</div>
      `

      content.addEventListener('mouseover', () => {
        content.querySelector('.marker-title').classList.add('hover');
      })

      content.addEventListener('mouseout', () => {
        content.querySelector('.marker-title').classList.remove('hover');
      })

      const customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
        yAnchor: 1,
      })

      customOverlay.setMap(map);
    }
  }, [markers]);

  return (
    <>
      <div id='map' className='map-size'></div>
    </>
  )
}

export default KakaoMap;
