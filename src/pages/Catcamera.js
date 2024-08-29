import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatPlace from '../components/CatPlace';
import '../css/Catcamera.css'

const ITEMS_PER_PAGE = 6;

const fixedTabs = [
  { id: 1, title: '정문' },
  { id: 2, title: '후문' },
  { id: 3, title: '도서관' },
  { id: 4, title: '차미리사기념관' },
  { id: 5, title: '자연과학대학' },
];

const Catcamera = () => {
  const [tabs] = useState(fixedTabs); // 고정된 탭 데이터를 사용
  const [catData, setCatData] = useState([]); // 고양이 데이터를 저장하는 상태
  const [activeTab, setActiveTab] = useState(fixedTabs[0].title); // 활성 탭을 초기화
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 저장하는 상태

  useEffect(() => {
    if (activeTab) {
      // 활성 탭이 변경될 때 해당 카테고리의 데이터를 가져오는 함수
      const fetchCatData = async () => {
        try {
          const response = await axios.get(`/api/recognition/tabs/${activeTab}`);
          if (response.data.success) {
            const formattedData = response.data.recognitions.map(item => ({
              id: item._id,
              title: item.title,
              time: formatDateTime(item.date),
              time2: new Date(item.date),
              img: item.img,
              category: item.category,
              animal: item.animal
            }));

            formattedData.sort((a, b) => b.time2 - a.time2);

            setCatData(formattedData);
          } else {
            console.error('Error: Cat data fetch was not successful.');
          }
        } catch (error) {
          console.error('Error fetching cat data:', error);
        }
      };
      fetchCatData();
    }
  }, [activeTab]);

  const formatDateTime = (dateTime) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDateTime = new Intl.DateTimeFormat('ko-KR', options).format(new Date(dateTime));
    return formattedDateTime.replace(/\./g, '. ');
  };

  const filteredData = catData
    .sort((a, b) => new Date(b.time) - new Date(a.time));

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickFirst = () => {
    setCurrentPage(1);
  };

  const handleClickLast = () => {
    setCurrentPage(totalPages);
  };

  const handleClickPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    }

    if (currentPage > totalPages - 3) {
      startPage = Math.max(totalPages - 4, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">방문한 발자국</div>
        <div className="tabs">
          <div className="tab-list">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab ${tab.title === activeTab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.title);
                  setCurrentPage(1);
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="tab-content">
        <div className="tab-panel">
          <CatPlace data={currentData.map(item=> ({
            ...item, time:  formatDateTime(item.time2)
          }))} />
        </div>
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
              className={currentPage === pageNumber ? 'active' : ''}
            >
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
    </div>
  );
};

export default Catcamera;
