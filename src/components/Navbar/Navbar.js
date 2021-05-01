import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../file-img/web-cv.docx.pdf'

const Navbar = () => {
    return (
        <nav className="navbar d-flex  navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand ms-5  text-info" href={resume}><h4>Download Resume</h4></a>

                <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active me-5 text-info" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/projects">Projcts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link me-5 text-info" aria-current="page" to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;