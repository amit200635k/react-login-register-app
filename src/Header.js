import React from 'react'
import {Link} from "react-router-dom";
export default function Header() {
    return (
        <div>
             <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo"><Link to="/">BizLand</Link></h1> 
                    <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Loginform">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/Regform">Registration</Link></li>
                    </ul>
                    </nav> 
                </div>
             </header>
        </div>
    )
}
