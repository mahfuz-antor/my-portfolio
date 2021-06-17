import React from 'react';
import myImg from '../../file-img/my-three.jpg';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { fab, faJsSquare, faHtml5, faCss3, faBootstrap, faReact, faNodeJs, faNode,  } from '@fortawesome/free-brands-svg-icons';
import mongo from '../../file-img/mongoDb.png';
import jquery from '../../file-img/JQuery_logo-512.png';
import firebase from '../../file-img/firebase-512.png';
import heroku from '../../file-img/heroku.png';
import git from '../../file-img/git.png';
import netlify from '../../file-img/netlify-512.png';
import next from '../../file-img/next.png';
import redux from '../../file-img/redux.png';
import sass from '../../file-img/sass.png';
import vscode from '../../file-img/visual-studio-code-3244524-2701893.png';
import './About.css';
import Footer from '../Footer/Footer';


const About = () => {

    // const imgStyle = {
    //     marginTop: '20px',
    //     display: 'block',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     width: '30%',
    //     borderRadius: '50%',
    //     border: '7px solid #01f1fd'

    // }

    return (
        <div className="">
            
            <div style={{backgroundColor:'#111'}} className="  ">
            <h1 style={{ borderBottom: '5px solid #fff', padding: '5px' }} className=" text-center pt-5 text-white">About Me </h1>
            
                {/* <img className=" align-self-center " style={imgStyle} src={myImg} alt="" /> */}

                <h1  className=" text-center pt-3 text-white">Md.Mahfuzur Rahman</h1>
                <h3  className=" text-center text-white">Junior Web Developer.</h3>
                <p className=" text-center p-5 text-white">I am a junior web developer and a web development learner also. Creating a creative web application is my passion. It is too much enjoyable work creating new web applications or adding any new features to me. I am comfortable working in Front-End web development. But I can do the Back-End part also.</p>

                <h2 style={{borderBottom: '5px solid white', padding: '5px'}} className=" text-center mt-5 text-white">PROFESSIONAL SKILLS: </h2>

                <h2 style={{ padding: '5px'}} className=" text-center mt-5 text-white">Expertise: </h2>

                {/* <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className="text-center mt-5 text-white"> Expertise: </h3> */}

                <div style={{marginRight: '0px'}} className="row justify-content-center">
                <h3 style={{ height:'130px',border: '3px solid #06f566', backgroundColor:'#fff', padding: '15px', borderRadius:'10px'}} className=" m-1 col-lg-2 col-xl-2 col-md-3  text-black col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faHtml5} size="2x" /> <br/> HTML5</h3>
                <h3 style={{ height:'130px',border: '3px solid #06f566',backgroundColor:'#fff',padding: '15px', borderRadius:'10px',}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faCss3} size="2x" /> <br/> CSS3</h3>
                <h3 style={{ height:'130px',padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faBootstrap} size="2x" /> <br/> Bootstrap4</h3>
                <h3 style={{ height:'130px',padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faJsSquare} size="2x" /> <br/> JavaScript</h3>
                <h3 style={{ height:'130px',padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faReact} size="2x" /> <br/> React</h3>
                </div>

                {/* <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className=" text-center mt-5 text-black"> Comfortable: </h3> */}
                <h2 style={{ padding: '5px'}} className=" text-center mt-5 text-white"> Comfortable: </h2>

                <div style={{marginRight: '0px'}} className="row justify-content-center">
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff'}} className=" m-1 col-lg-2 col-xl-2 col-md-3  shadow-lg  text-black col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faNodeJs} size="2x" /> <br/> Node JS</h3>
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={mongo} alt=""/> <br/> Mongo DB</h3>
                <h3 style={{ height:'130px', padding: '25px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center">  React Native </h3>
                <h3 style={{ height:'130px', padding: '10px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'75px', height: '45px'}} src={jquery} alt=""/> <br/> JQuery</h3>
                </div>

                {/* <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className=" text-center mt-5 text-white"> Familiar: </h3>  */} 
                <h2 style={{ padding: '5px'}} className=" text-center mt-5 text-white"> Familiar: </h2>

                <div style={{marginRight: '0px'}} className="row justify-content-center">
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className=" m-1 col-lg-2 col-xl-2 col-md-3  shadow-lg  text-black col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> Redux</h3>
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={sass} alt=""/> <br/> SASS</h3>
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={next} alt=""/> <br/> Next JS</h3>
                <h3 style={{ height:'130px', padding: '27px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center">  Reducer</h3>
                </div>
                {/* <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className=" text-center mt-5 text-black"> Tools: </h3>  */}
                <h2 style={{ padding: '5px'}} className=" text-center mt-5 text-white"> Tools: </h2>
                
                <div style={{marginRight: '0px'}} className="row justify-content-center pb-5">
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className=" m-1 col-lg-2 col-xl-2 col-md-3  shadow-lg  text-black col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={vscode} alt=""/> <br/> VSCode</h3>
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={git} alt=""/> <br/> Git </h3>
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"> <FontAwesomeIcon icon={faNode} size="2x" /> <br/> Node</h3>
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={firebase} alt=""/> <br/> Firebase</h3>
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"><img style={{width:'32px', height: '32px'}} src={heroku} alt=""/> <br/> Heroku </h3>
                <h3 style={{ height:'130px', padding: '15px', borderRadius:'10px', border: '3px solid #06f566',backgroundColor:'#fff' }} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-black col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={netlify} alt=""/> <br/> Netlify </h3>
                </div>

                
            </div>
             {/* <Footer></Footer> */}
        </div>
    );
};

export default About;