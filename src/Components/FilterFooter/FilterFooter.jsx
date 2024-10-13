import React from "react";
import './style.css'

const FilterFooter = () => {
    return(
        <div className="FilterFooter">
        <span>2 items</span>

        <div className="d-flex">
        <button className="active">All</button>
        <button className="mx-2">Active</button>
        <button>Completed</button>
        </div>
        </div>
    )
}
export default FilterFooter;