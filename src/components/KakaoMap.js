import React, {useEffect} from 'react';
import "../css/KakaoMap.css"
import markerColor from "../images/markerColor.png"
const { kakao } = window;

const KakaoMap = ({ markers }) => {

  useEffect(() => {
    const container = document.getElementById("map")
    const options = {
      center: new kakao.maps.LatLng(37.6511988 , 127.0161604),
      level: 4,
    }
    const map = new kakao.maps.Map(container, options)

    const imageSrc = markerColor
    const imageSize = new kakao.maps.Size(24, 35)
    const imageOption = { offset: new kakao.maps.Point(12, 35) }

    for (var i = 0; i < markers.length; i ++) {
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)

      const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(markers[i].lat, markers[i].lng),
          title: markers[i].name,
          image: markerImage,
      })

      const infowindow = new kakao.maps.InfoWindow({
        // content: markers[i].name
        content: `<div style="padding:5px;font-size:12px;">${markers[i].name}</div>`
      })

      kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
      kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

      // const content = `<div class="custom-marker" title="${markers[i].name}">
      //     ${markers[i].name}
      //   </div>`

      // const position = new kakao.maps.LatLng(markers[i].lat, markers[i].lng)

      // const customOverlay = new kakao.maps.CustomOverlay({
      //   position: position,
      //   content: content,
      //   yAnchor: 1,
      // });

      // customOverlay.setMap(map)
    }
  
      // const infowindow = new kakao.maps.InfoWindow({
      //     // content: markers[i].name
      //   content: `<div style="padding:5px;font-size:12px;">${markers[i].name}</div>`
      // })

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
  )
}

export default KakaoMap;
