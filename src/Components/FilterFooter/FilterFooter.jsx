import React from "react";
import './style.css'

const FilterFooter = ({data}) => {

let dataLenght = data.length;

    return(
        <div className="FilterFooter">
        <span>{`${dataLenght} item`}</span>
        

        <div className="d-flex">
        <button className="active">All</button>
        <button className="mx-2">Active</button>
        <button>Completed</button>
        </div>
        </div>
    )
}
export default FilterFooter;