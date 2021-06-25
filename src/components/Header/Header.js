import React from 'react';
import myImg from '../../file-img/my-three.jpg';
import './Header.css';
import resume from '../../file-img/web-cv.docx.pdf';

const Header = () => {

    const imgStyle = {
        marginTop: '20px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        borderRadius: '50%',
        border: '3px solid rgb(6, 245, 102)'

    }

    return (
        <div style={{ backgroundColor: '#000', marginRight: '0px' }} className="d-flex p-3 row justify-content-center pt-5 pb-5 text-white bgImg">
            <div className="container col-md-5 align-self-center animate__animated animate__zoomInLeft">
                <h2 className="">HI!, I AM Md. Mahfuzur Rahman</h2>
                <div className=" align-self-center pt-2" id="typing">I AM A <span> WEB DEVELOPER</span></div>
                <div className=" align-self-center pt-2" id="crow">|</div>
                <p className=" mt-5 mb-3 text-white text-justify">I am a junior web developer and a web development learner also. Creating a creative web application is my passion.</p>
                <a className="mr-md-2 p-2  rounded bg-info text-white btnFlex " href="/contact" >Hire Me</a>
                <a className="mr-md-2 p-2 rounded bg-info text-white btnFlex" href={resume} target="-blank">Resume</a>


            </div>
            <div className="col-md-4 container animate__animated animate__zoomInRight">
                <img style={imgStyle} src={myImg} alt="" />
            </div>

        </div>
    );
};

export default Header;