import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../css/CatfeedDetail.css'
import CatfeedDetailList from '../components/CatfeedDetailList';

const ITEMS_PER_PAGE = 8

const CatfeedDetail = () => {
  const { name } = useParams() // URL 파라미터로부터 name을 받음
  const decodedName = decodeURIComponent(name); // 디코드하여 사용
  const [currentPage, setCurrentPage] = useState(1) // 현재 페이지를 저장하는 상태
  const [catfeedInfo, setCatfeedInfo] = useState([]) // 데이터 저장 상태
  const [feedStationName, setFeedStationName] = useState(decodedName) // 급식소 이름 저장 상태

  useEffect(() => {
    const fetchCatfeedData = async () => {
      try {
        const response = await axios.get(`/api/feedStationDetail/${decodedName}`);
        if (response.data.success && response.data.iotData) {
          setCatfeedInfo(response.data.iotData); // iotData 배열 설정
        } else {
          console.error('Error: Data fetch was not successful.');
          setCatfeedInfo([]); // 데이터가 없을 경우 빈 배열 설정
        }
      } catch (error) {
        console.error('Error fetching catfeed data:', error);
        setCatfeedInfo([]); // 오류 발생 시 빈 배열 설정
      }
    };
    fetchCatfeedData();
  }, [decodedName]);


  const totalPages = Math.ceil(catfeedInfo.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentData = catfeedInfo.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleClickFirst = () => {
    setCurrentPage(1);
  }

  const handleClickLast = () => {
    setCurrentPage(totalPages);
  }

  const handleClickPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const getPageNumbers = () => {
    const pageNumbers = []
    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, currentPage + 2)

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages)
    }

    if (currentPage > totalPages - 3) {
      startPage = Math.max(totalPages - 4, 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers;
  }

  const navigate = useNavigate()

  const goCctv = () => {
    navigate('/Catcamera')
  }

  return (
    <div className='container'>
      <div className='container-title'>
        <div className='title'>{feedStationName}</div>
        <button className='go-btn' onClick={goCctv}>CCTV 보기</button>
      </div>
      {currentData.length > 0 ? (
        currentData.map((item) => (
          <CatfeedDetailList key={item._id} props={item} />
        ))
      ) : (
        <div className='no-data'>데이터가 없습니다.</div>
      )}
      <div className="pagination">
        <button onClick={handleClickFirst} disabled={currentPage === 1}>
          &lt;&lt;
        </button>
        <button onClick={handleClickPrev} disabled={currentPage === 1}>
          &lt;
        </button>
        {getPageNumbers().map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => handleClickPageNumber(pageNumber)}
            className={currentPage === pageNumber ? 'active' : ''}>
            {pageNumber}
          </button>
        ))}
        <button onClick={handleClickNext} disabled={currentPage === totalPages}>
          &gt;
        </button>
        <button onClick={handleClickLast} disabled={currentPage === totalPages}>
          &gt;&gt;
        </button>
      </div>
    </div>
  )
}

export default CatfeedDetail;
