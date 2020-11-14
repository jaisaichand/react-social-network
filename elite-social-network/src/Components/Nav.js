import React from 'react';

import {
    // BrowserRouter as Router,
    Link
} from "react-router-dom";


const Nav = () => {

    return (
        <div>

            <ul className="list-group list-group-horizontal">
                <li className="list-group-item" style={{ "text-decoration": "none", "border": "none" }} >
                    <Link to="/" style={{ "text-decoration": "none", "border": "none" }}>Home</Link>
                </li>
                <li className="list-group-item" style={{ "text-decoration": "none", "border": "none" }} >
                    <Link to="/signup" style={{ "text-decoration": "none", "border": "none" }}>signup</Link>
                </li>
                <li className="list-group-item" style={{ "text-decoration": "none", "border": "none" }} >
                    <Link to="/login" style={{ "text-decoration": "none", "border": "none" }}>login</Link>
                </li>
            </ul>


        </div>
    )

}

export default Nav;