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
        border: '7px solid #01f1fd'

    }

    return (
        <div style={{ backgroundColor: '#000', marginRight: '0px' }} className="d-flex row justify-content-center pt-5 pb-5 text-white bgImg">
            <div className="col-md-5 align-self-center">
                <h2 className="offset-2">HI!, I AM MAHFUZ ANTOR</h2>
                <div className="offset-2 align-self-center" id="typing">I AM A <span>WEB DEVELOPER</span></div>
                <div className=" align-self-center" id="crow">|</div>
                <p className="offset-2 mt-5 text-white">I am a junior web developer and a web development learner also. Creating a creative web application is my passion.</p>
                <a className="mr-2 p-2 rounded bg-info text-white btnFlex offset-2" href="/contact" >Hire Me</a>
                <a className="mr-2 p-2 rounded bg-info text-white btnFlex" href={resume} target="-blank">Resume</a>


            </div>
            <div className="col-md-4">
                <img style={imgStyle} src={myImg} alt="" />
            </div>

        </div>
    );
};

export default Header;