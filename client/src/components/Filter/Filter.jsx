import React, { useEffect, useState } from 'react';
import './filter.scss';

const Filter = ({ tableList, filterParams, handleFilter }) => {
    const [filterState, setFilterState] = useState({})

    useEffect(() => {
        handleFilter(tableList,
            filterState.filter_header,
            filterState.filter_param,
            filterState.filter_input)
    }, [filterState])

    const handlerFilterState = (e) => {
        setFilterState({
            ...filterState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="filter-container"
            onChange={(e) => handlerFilterState(e)}>
            <select name="filter_header">
            <option defaultValue='-- column filter --'> -- column filter -- </option>
                {filterParams.tableHeaders.map(header =>
                    header !== 'date'
                        ? <option key={header}>{header}</option>
                        : null
                )}
            </select>
            <select name="filter_param">
            <option defaultValue=' -- filter type --'> -- filter type -- </option>
                {filterParams.params.map(param =>
                    <option key={param}>{param}</option>
                )}
            </select>
            <input type="text"
                name="filter_input" />
        </div>
    );
};

export default Filter;