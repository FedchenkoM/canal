import React from 'react';
import './table.scss';
import not_results from '../../assets/img/no-result.svg';

const Table = ({ tableList, tableHeaders }) => {
    return (
        <div className="container">
            <div className="table__head">
                {tableHeaders.map(el =>
                    <div key={el}>{el}</div>
                )}
            </div>

            {tableList.length
                ?
                tableList.map(el =>
                    <div className="element-container"
                        key={el._id}>
                        <div className="element">{el.name}</div>
                        <div className="element">{el.date}</div>
                        <div className="element">{el.amount}</div>
                        <div className="element">{el.distance}</div>
                    </div>
                )
                : <img src={not_results}
                    alt="Нет результатов поиска" />
            }
        </div>
    );
};

export default Table;