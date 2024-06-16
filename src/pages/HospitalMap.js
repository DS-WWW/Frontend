import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HospitalList from '../components/HospitalList';
import KakaoMap from '../components/KakaoMap';
import "../css/HospitalMap.css"
import search from '../images/search.png'

const HospitalMap = () => {
  const [hospital, setHospital] = useState("")
  const [markers, setMarkers] = useState([])
  const [filteredMarkers, setFilteredMarkers] = useState([])

  useEffect(() => {
    const getHospital = async () => {
      try {
        const response = await axios.get('/api/hospital')
        if (response.data.success) {
          setMarkers(response.data.hospitals)
          setFilteredMarkers(response.data.hospitals)
        } else {
          console.error('Error: Data fetch was not successful.');
        }
      } catch (error) {
        console.error('Error fetching hospital markers:', error)
      }
    }
    getHospital()
  }, [])

  const handleSearch = () => {
    const filter = hospital
    const filteredData = markers.filter(marker => {
      return marker.name.includes(filter) || marker.address.includes(filter);
    })
    setFilteredMarkers(filteredData)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <>
      <div className='hospital-map'>
        <div className='title'>동물병원 지도</div>
      </div>
      <KakaoMap markers={filteredMarkers} />
      <div>
        <div className='hospital-search'>
          <div className='title'>동물병원 찾기</div>
        </div>
        <div className='search'>
          <input
            className='search-input'
            onChange={(e) => setHospital(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='장소를 입력하세요.' />
          <button className='btn-search' onClick={handleSearch} ><img src={search} alt="search" /></button>
        </div>
        {filteredMarkers.map((marker) => (
          <HospitalList key={marker._id} marker={marker} />
        ))}
      </div>
    </>
  );
}

export default HospitalMap;
