import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import ProjectOne from '../Projects/ProjectOne';
import ProjectTwo from '../Projects/ProjectTwo';
import mohanonda from '../../file-img/Mohanonda IT.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelopeOpen, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { fab, faJsSquare, faHtml5, faCss3, faBootstrap, faReact, faExternalLinkAlt } from '@fortawesome/free-brands-svg-icons';
import About from '../About/About';

const Home = () => {
    
    return (
        <div style={{ backgroundColor: '#111', marginRight: '0px' }}>
            <Navbar></Navbar>
            <Header></Header>
            <div>



               

                {/* <h2 className=" text-center mt-3 text-white">MAHFUZ ANTOR</h2>
                <h3 className=" text-center text-white"> I'm A Junior Web Developer.</h3>
                <p className=" text-center p-5 text-white">I am a junior web developer and a web development learner also. Creating a creative web application is my passion.</p>

                <h3 style={{ backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%' }} className="text-center mt-5 text-white"> Expertise: </h3>

                <div className="row justify-content-center">
                    <p style={{ border: '10px solid rgb(1, 241, 253)', backgroundColor: '#11b1c1', padding: '15px', borderRadius: '10px' }} className=" m-1 col-lg-2 col-xl-2 col-md-3  text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faHtml5} size="2x" /> <br /> HTML5</p>
                    <p style={{ border: '10px solid rgb(1, 241, 253)', padding: '15px', borderRadius: '10px', backgroundColor: '#11b1c1' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faCss3} size="2x" /> <br /> CSS3</p>
                    <p style={{ border: '10px solid rgb(1, 241, 253)', padding: '15px', borderRadius: '10px', backgroundColor: '#11b1c1' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faBootstrap} size="2x" /> <br /> Bootstrap4</p>
                    <p style={{ border: '10px solid rgb(1, 241, 253)', padding: '15px', borderRadius: '10px', backgroundColor: '#11b1c1' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faJsSquare} size="2x" /> <br /> JavaScript</p>
                    <p style={{ border: '10px solid rgb(1, 241, 253)', padding: '15px', borderRadius: '10px', backgroundColor: '#11b1c1' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faReact} size="2x" /> <br /> React</p>
                    <a href="/about" style={{ border: '10px solid rgb(1, 241, 253)', padding: '15px', borderRadius: '10px', backgroundColor: '#11b1c1' }} className="m-3 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> Know More <br /><FontAwesomeIcon icon={faAngleDoubleRight} size="4x" /> <br /> Click Here</a>
                </div> */}
                <About></About>
            </div>
            <h3 style={{ backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%' }} className="text-center mt-5 text-white"> Some Projects: </h3>
            <ProjectOne></ProjectOne>
            <ProjectTwo></ProjectTwo>
            <div className="row justify-content-center">
                <a href="/Projects" style={{ border: '10px solid rgb(1, 241, 253)', padding: '15px', borderRadius: '10px', backgroundColor: '#11b1c1' }} className="m-3 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> See More <br /><FontAwesomeIcon icon={faAngleDoubleRight} size="4x" /> <br /> Click Here</a>
            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;