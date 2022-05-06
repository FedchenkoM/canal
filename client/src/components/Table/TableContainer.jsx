import React, { useEffect, useState } from 'react';
import Table from './Table';
import { getTableList } from '../../api/tableAPI';
import Loader from '../../assets/img/loader.gif';
import './table.scss';
import Filter from '../Filter/Filter';
import { filter } from '../../helpers/filterHelper';
import Pagination from '../Pagination/Pagination';

const TableContainer = () => {
    const [tableList, setTableList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [pageChunk, setPageChunk] = useState([])

    const filterParams = {
        tableHeaders: ['name', 'date', 'amount', 'distance'],
        params: ['is equal', 'contains', 'more than', 'less than']
    }

    useEffect(() => {
        getTableList()
            .then((res) => {
                setTableList(res.data.tableList)
                setFilteredList(res.data.tableList)
                setPageChunk(res.data.tableList.slice(0, 4)) // 4 в методе slice это количество записей на странице 
            })
            .catch((err) => console.log(err))
    }, [])

    const handleFilter = (list, column, operator, input) => {
        const listWithFilter = filter(list, column, operator, input)
        setFilteredList(listWithFilter)
        setPageChunk(listWithFilter.slice(0, 4)) 
    }

    const handlePageChunk = (numberOfPage) => {
        return setPageChunk(filteredList.slice(numberOfPage, numberOfPage + 4))
    }

    return (
        <div className="container">
            <Filter tableList={tableList}
                filterParams={filterParams}
                handleFilter={handleFilter} />
            {tableList.length
                ?
                <>
                    <Table tableList={pageChunk}
                        tableHeaders={filterParams.tableHeaders} />
                    {pageChunk.length
                        ?
                        <Pagination listLength={filteredList.length}
                            handlePageChunk={handlePageChunk} />
                        : null
                    }
                </>
                : <img src={Loader}
                    className="loader"
                    alt="Подождите..." />
            }
        </div>
    );
};

export default TableContainer;