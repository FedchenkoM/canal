import React from 'react';
import './table.scss';

const Table = ({ tableList, tableHeaders }) => {
    // console.log(tableHeaders);
    return (
        <div className="container">
            <div className="table__head">
                {tableHeaders.map(el =>
                    <div key={el}>{el}</div>
                )}
            </div>
            {tableList.map(el =>
                <div className="element-container"
                    key={el._id}>
                    <div className="element">{el.name}</div>
                    <div className="element">{el.date}</div>
                    <div className="element">{el.amount}</div>
                    <div className="element">{el.distance}</div>
                </div>
            )}
        </div>
    );
};

export default Table;