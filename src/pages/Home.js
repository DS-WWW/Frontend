import React from 'react';
import info1 from '../images/info1.PNG';
import info2 from '../images/info2.PNG';
import info3 from '../images/info3.PNG';

const Home = () => {
  const containerStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // 이미지들을 가운데 정렬
    gap: 0 // 이미지 사이의 간격 제거
  };

  const imageStyle = {
    width: '100vw', // 이미지를 화면 너비에 맞춤
    height: 'auto', // 이미지 높이는 자동 조정
    objectFit: 'contain' // 이미지의 가로 비율을 유지하며 전체를 표시
  };

  return (
    <div style={containerStyle}>
      <img src={info1} alt="info1" style={imageStyle} />
      <img src={info2} alt="info2" style={imageStyle} />
      <img src={info3} alt="info3" style={imageStyle} />
    </div>
  );
};

export default Home;
