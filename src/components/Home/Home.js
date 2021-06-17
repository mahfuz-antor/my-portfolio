import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProjectOne from '../Projects/ProjectOne';
import ProjectTwo from '../Projects/ProjectTwo';
import ProjectsThree from '../Projects/ProjectsThree';
import mohanonda from '../../file-img/Mohanonda IT.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelopeOpen, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { fab, faJsSquare, faHtml5, faCss3, faBootstrap, faReact, faExternalLinkAlt } from '@fortawesome/free-brands-svg-icons';
import About from '../About/About';
import BlogDetails from '../Blogs/BlogDetails';

const Home = () => {
    
    return (
        <div style={{ backgroundColor: '#111', marginRight: '0px' }}>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <h2 style={{ padding: '5px'}} className=" text-center mt-5 text-white">Some Projects: </h2>
            <ProjectOne></ProjectOne>
            <ProjectTwo></ProjectTwo>
            <ProjectsThree></ProjectsThree>
            <BlogDetails></BlogDetails>
            {/* <div className="row justify-content-center">
                <a href="/Projects" style={{ border: '10px solid rgb(1, 241, 253)', padding: '15px', borderRadius: '10px', backgroundColor: '#11b1c1' }} className="m-3 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> See More <br /><FontAwesomeIcon icon={faAngleDoubleRight} size="4x" /> <br /> Click Here</a>
            </div> */}
            <h2 style={{ paddingTop: '10px'}} className=" text-center mt-5 text-white">Contact Me: </h2>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;