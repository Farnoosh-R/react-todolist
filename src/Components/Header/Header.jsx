import React from "react";

const Header = () => {
    return(
        <div className="Header">
        <input className="form-control w-50 d-inline-block" type="text" placeholder="enter new todo"/>
        <button className="btn btn-success" type="submit">Add</button>
        </div>
    )

}
export default Header;