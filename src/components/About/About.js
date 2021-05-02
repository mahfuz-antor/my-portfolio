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

    const imgStyle = {
        marginTop: '20px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '30%',
        borderRadius: '50%',
        border: '7px solid #01f1fd'

    }

    return (
        <div className="">
            
            <div style={{backgroundColor:'#11b1c1'}} className="  ">
            <Navbar></Navbar>
                <img className=" align-self-center " style={imgStyle} src={myImg} alt="" />

                <h1  className=" text-center mt-3 text-white">MAHFUZ ANTOR</h1>
                <h3  className=" text-center text-white">Junior Web Developer.</h3>
                <p className=" text-center p-5 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quam voluptates voluptatibus praesentium, iste culpa ex omnis consectetur obcaecati eos cumque quisquam harum laudantium hic nulla autem possimus error tempore tenetur. Pariatur expedita voluptatem iure.</p>

                <h2 style={{borderBottom: '5px solid rgb(1, 241, 253)', padding: '5px'}} className=" text-center mt-5 text-white">MY SKILLS: </h2>

                <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className="text-center mt-5 text-white"> Expertise: </h3>

                <div className="row justify-content-center">
                <p style={{border: '10px solid rgb(1, 241, 253)', backgroundColor:'#11b1c1', padding: '15px', borderRadius:'10px'}} className=" m-1 col-lg-2 col-xl-2 col-md-3  text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faHtml5} size="2x" /> <br/> HTML5</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faCss3} size="2x" /> <br/> CSS3</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faBootstrap} size="2x" /> <br/> Bootstrap4</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faJsSquare} size="2x" /> <br/> JavaScript</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faReact} size="2x" /> <br/> React</p>
                </div>

                <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className=" text-center mt-5 text-white"> Comfortable: </h3>

                <div className="row justify-content-center">
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className=" m-1 col-lg-2 col-xl-2 col-md-3  shadow-lg  text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faNodeJs} size="2x" /> <br/> Node JS</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={mongo} alt=""/> <br/> Mongo DB</p>
                <h3 style={{border: '10px solid rgb(1, 241, 253)',padding: '25px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center">  React Native </h3>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '10px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'75px', height: '45px'}} src={jquery} alt=""/> <br/> JQuery</p>
                </div>

                <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className=" text-center mt-5 text-white"> Familiar: </h3> 

                <div className="row justify-content-center">
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className=" m-1 col-lg-2 col-xl-2 col-md-3  shadow-lg  text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> Redux</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={sass} alt=""/> <br/> SASS</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={next} alt=""/> <br/> Next JS</p>
                <h3 style={{border: '10px solid rgb(1, 241, 253)',padding: '27px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center">  Reducer</h3>
                </div>
                <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className=" text-center mt-5 text-white"> Tools: </h3> 
                
                <div className="row justify-content-center pb-5">
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className=" m-1 col-lg-2 col-xl-2 col-md-3  shadow-lg  text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={vscode} alt=""/> <br/> VSCode</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={git} alt=""/> <br/> Git </p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> <FontAwesomeIcon icon={faNode} size="2x" /> <br/> Node</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={firebase} alt=""/> <br/> Firebase</p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"><img style={{width:'32px', height: '32px'}} src={heroku} alt=""/> <br/> Heroku </p>
                <p style={{border: '10px solid rgb(1, 241, 253)',padding: '15px', borderRadius:'10px', backgroundColor:'#11b1c1'}} className="m-1 col-lg-2 col-xl-2 col-md-3   shadow-lg text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={netlify} alt=""/> <br/> Netlify </p>
                </div>

                
            </div>
             <Footer></Footer>
        </div>
    );
};

export default About;