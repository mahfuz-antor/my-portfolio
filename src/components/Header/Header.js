import React from 'react';
import myImg from '../../file-img/my-one.png';
import './Header.css';
import resume from '../../file-img/web-cv.docx.pdf';

const Header = () => {
    return (
        <div style={{backgroundColor:'#11b1c1',marginRight: '0px'}} className="d-flex row justify-content-center pt-5 bgImg">
            <div className="col-md-5 align-self-center">
                <h2 className="offset-2">Hi Guys, I'm Mahfuz Antor</h2>
                <p className="offset-2">I am a junior web developer and a web development learner also. Creating a creative web application is my passion. It is too much enjoyable work creating new web applications or adding any new features to me. I am comfortable working in Front-End web development. But I can do the Back-End part also.</p>
                <a className="mr-2 p-2 rounded bg-info text-white btnFlex offset-2" href="/contact" >Hire Me</a>
                <a className="mr-2 p-2 rounded bg-info text-white btnFlex" href={resume} target="-blank">Resume</a>
                

            </div>
            <div className="col-md-4">
                <img style={{width:'100%', height: '100%'}} src={myImg} alt=""/>
            </div>
            
        </div>
    );
};

export default Header;