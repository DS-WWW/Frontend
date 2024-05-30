import React, { useState } from 'react';
import CatPlace from '../components/CatPlace';
import '../css/Catcamera.css'

const tabs = [ /* 각 탭의 정보도 백엔드에서 줘야할 것 같아요. 아닌가? */
  { id: 1, title: '도서관' },
  { id: 2, title: '정문' },
  { id: 3, title: '차미리사관' },
  { id: 4, title: '자연과학대학' }
]

const catData = [
  {id: 1, title: '도서관', time: '2024.5.17 00:20'},
  {id: 1, title: '도서관', time: '2024.5.17 01:20'},
  {id: 1, title: '도서관', time: '2024.5.17 02:20'},
  {id: 1, title: '도서관', time: '2024.5.17 03:20'},
  {id: 1, title: '도서관', time: '2024.5.17 04:20'},
  {id: 1, title: '도서관', time: '2024.5.17 05:20'},
  {id: 1, title: '도서관', time: '2024.5.17 06:20'},
  {id: 1, title: '도서관', time: '2024.5.17 07:20'},
  {id: 1, title: '도서관', time: '2024.5.17 08:20'},
  {id: 2, title: '정문', time: '2024.5.17 11:00'},
  {id: 1, title: '도서관', time: '2024.5.17 00:20'},
  {id: 1, title: '도서관', time: '2024.5.17 01:20'},
  {id: 1, title: '도서관', time: '2024.5.17 02:20'},
  {id: 1, title: '도서관', time: '2024.5.17 03:20'},
  {id: 1, title: '도서관', time: '2024.5.17 04:20'},
  {id: 1, title: '도서관', time: '2024.5.17 05:20'},
  {id: 1, title: '도서관', time: '2024.5.17 06:20'},
  {id: 1, title: '도서관', time: '2024.5.17 07:20'},
  {id: 1, title: '도서관', time: '2024.5.17 08:20'},
  {id: 2, title: '정문', time: '2024.5.17 11:00'},
  {id: 1, title: '도서관', time: '2024.5.17 00:20'},
  {id: 1, title: '도서관', time: '2024.5.17 01:20'},
  {id: 1, title: '도서관', time: '2024.5.17 02:20'},
  {id: 1, title: '도서관', time: '2024.5.17 03:20'},
  {id: 1, title: '도서관', time: '2024.5.17 04:20'},
  {id: 1, title: '도서관', time: '2024.5.17 05:20'},
  {id: 1, title: '도서관', time: '2024.5.17 06:20'},
  {id: 1, title: '도서관', time: '2024.5.17 07:20'},
  {id: 1, title: '도서관', time: '2024.5.17 08:20'},
  {id: 2, title: '정문', time: '2024.5.17 11:00'},
  {id: 1, title: '도서관', time: '2024.5.17 00:20'},
  {id: 1, title: '도서관', time: '2024.5.17 01:20'},
  {id: 1, title: '도서관', time: '2024.5.17 02:20'},
  {id: 1, title: '도서관', time: '2024.5.17 03:20'},
  {id: 1, title: '도서관', time: '2024.5.17 04:20'},
  {id: 1, title: '도서관', time: '2024.5.17 05:20'},
  {id: 1, title: '도서관', time: '2024.5.17 06:20'},
  {id: 1, title: '도서관', time: '2024.5.17 07:20'},
  {id: 1, title: '도서관', time: '2024.5.17 08:20'},
  {id: 2, title: '정문', time: '2024.5.17 11:00'},
  {id: 1, title: '도서관', time: '2024.5.17 00:20'},
  {id: 1, title: '도서관', time: '2024.5.17 01:20'},
  {id: 1, title: '도서관', time: '2024.5.17 02:20'},
  {id: 1, title: '도서관', time: '2024.5.17 03:20'},
  {id: 1, title: '도서관', time: '2024.5.17 04:20'},
  {id: 1, title: '도서관', time: '2024.5.17 05:20'},
  {id: 1, title: '도서관', time: '2024.5.17 06:20'},
  {id: 1, title: '도서관', time: '2024.5.17 07:20'},
  {id: 1, title: '도서관', time: '2024.5.17 08:20'},
  {id: 2, title: '정문', time: '2024.5.17 11:00'},
  {id: 1, title: '도서관', time: '2024.5.17 00:20'},
  {id: 1, title: '도서관', time: '2024.5.17 01:20'},
  {id: 1, title: '도서관', time: '2024.5.17 02:20'},
  {id: 1, title: '도서관', time: '2024.5.17 03:20'},
  {id: 1, title: '도서관', time: '2024.5.17 04:20'},
  {id: 1, title: '도서관', time: '2024.5.17 05:20'},
  {id: 1, title: '도서관', time: '2024.5.17 06:20'},
  {id: 1, title: '도서관', time: '2024.5.17 07:20'},
  {id: 1, title: '도서관', time: '2024.5.17 08:20'},
  {id: 2, title: '정문', time: '2024.5.17 11:00'},
  {id: 3, title: '차미리사관', time: '2024.5.17 12:00'},
  {id: 4, title: '자연과학대학', time: '2024.5.17 13:00'},
  {id: 4, title: '자연과학대학', time: '2024.5.17 12:34'}
]

const ITEMS_PER_PAGE = 6

const Catcamera = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredData = catData
    .filter(item => item.id === activeTab)
    .sort((a, b) => new Date(b.time) - new Date(a.time))

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const currentData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE)

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

  return (
    <div className="container">
      <div className="header">
        <text className="title">방문한 발자국</text>
        <div className="tabs">
          <div className="tab-list">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab ${tab.id === activeTab ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(tab.id)
                  setCurrentPage(1)
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
          <CatPlace data={currentData} />
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
}

export default Catcamera;