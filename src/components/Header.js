import React from 'react';
import '../styles/Header.css';
import {Link} from 'react-router-dom';
import {userService} from '../services/user.services';

export default () => {
    const check = userService.checkLogin()
    return (
        <>
        <div className="container-fluid">
           <div className="header">
            <nav className="navbar navbar-expand-lg head_brand">
                <a className="navbar-brand font-bold brand" href="google.com">Ad setting demo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <ul className="navbar-nav ml-auto">
                        {!check && <li className="nav-item active">
                            <a className="nav-link username" href="https://facebook.com"> Username <span className="sr-only">(current)</span></a>
                        </li>}
                        {check &&<li className="nav-item active">
                            <Link className="nav-link username" to="/login"> Nhut thuy <span className="sr-only">(current)</span></Link>
                        </li>}
                    </ul>
                </div>
            </nav>
           </div>
        </div>
        </>
    )
}