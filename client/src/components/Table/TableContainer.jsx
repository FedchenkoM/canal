import React, { useEffect, useState } from 'react';
import Table from './Table';
import { getTableList } from '../../api/tableAPI';
import Loader from '../../assets/img/loader.gif';
import './table.scss';
import Filter from '../Filter/Filter';
import { filter } from '../../helpers/filterHelper';

const TableContainer = () => {
    const [tableList, setTableList] = useState([])
    const [filteredList, setFilteredList] = useState(tableList)

    const filterParams = {
        tableHeaders: ['name', 'date', 'amount', 'distance'],
        params: ['is equal', 'contains', 'more than', 'less than']
    }

    useEffect(() => {
        getTableList()
            .then((res) => {
                setTableList(res.data.tableList)
        setFilteredList(res.data.tableList)
    })
        .catch((err) => console.log(err))
}, [])

const handleFilter = (list, column, operator, input) => {
    setFilteredList(filter(list, column, operator, input))
}

return (
    <div className="container">
        <Filter tableList={tableList}
            filterParams={filterParams}
            handleFilter={handleFilter} />
        {tableList.length
            ? <Table tableList={filteredList}
                tableHeaders={filterParams.tableHeaders} />
            : <img src={Loader}
                className="loader"
                alt="Подождите..." />
        }
    </div>
);
};

export default TableContainer;