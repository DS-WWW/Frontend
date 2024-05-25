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
      const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(markers[i].lat, markers[i].lng),
          title: markers[i].name,
      })
  
      const infowindow = new kakao.maps.InfoWindow({
          content: markers[i].name
      })

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    }

    function makeOverListener(map, marker, infowindow) {
      return function() {
          infowindow.open(map, marker);
      }
    }
  
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        };
    }
  }, [markers]);

  return (
    <>
      <div id='map' className='map-size'></div>
    </>
  );
}

export default KakaoMap;
