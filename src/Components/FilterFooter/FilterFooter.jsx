import React, { useState } from "react";
import './style.css'

const FilterFooter = ({data, updateFilter}) => {

    const [filter, setFilter] = useState('all');

    const handleFilter = (filterName) => {
        setFilter(filterName);
        updateFilter(filterName);
    }

let dataLenght = data.length;

    return(
        <div className="FilterFooter">
        <span>{`${dataLenght} item`}</span>
        

        <div className="d-flex">
        <button onClick={() => handleFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => handleFilter('active')} className={filter === 'active' ? 'active mx-2' : 'mx-2'}>Active</button>
        <button onClick={() => handleFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
        </div>
        </div>
    )
}
export default FilterFooter;