import React, { useState, useEffect } from 'react';
import './pagination.scss'

const Pagination = ({ listLength, handlePageChunk }) => {
    let [currentPage, setCurrentPage] = useState(1)
    let [pageNumbers, setPageNumbers] = useState(1)
    let [pages, setPages] = useState([])

    useEffect(() => {
        setCurrentPage(1)
        setPages(listLength <= 4 ? [1] : [1, 2])
        setPageNumbers(Math.ceil(listLength / 4))
    }, [listLength])

    const handlePages = (element) => {
        const currentPage = Number(element.innerText)
        setCurrentPage(currentPage)
        let pages = []
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            if (i <= 0 || i > pageNumbers) continue
            pages.push(i);
        }
        handlePageChunk(currentPage * 4 - 4)
        setPages(pages)
    }

    return (
        <>
            <span>Find {listLength} {listLength > 1 ? 'elements' : 'element'} </span>
            <div className="pagination">
                <div className="pagination__pages">
                    {pages.map((el) => <div onClick={(e) => { handlePages(e.target) }}
                        key={el}
                        className={el === currentPage ? 'current' : null}
                    >{el}</div>)}
                </div>
            </div>
        </>
    );
};

export default Pagination;