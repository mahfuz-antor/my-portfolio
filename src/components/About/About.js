import React from 'react';
import myImg from '../../file-img/my-three.jpg';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, } from '@fortawesome/free-solid-svg-icons';
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
        <div>
            <Navbar></Navbar>
            <div className=" justify-content-center ">

                <img className=" align-self-center " style={imgStyle} src={myImg} alt="" />

                <h1  className=" text-center mt-3">MAHFUZ ANTOR</h1>
                <h3  className=" text-center ">Junior Web Developer.</h3>
                <p className=" text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quam voluptates voluptatibus praesentium, iste culpa ex omnis consectetur obcaecati eos cumque quisquam harum laudantium hic nulla autem possimus error tempore tenetur. Pariatur expedita voluptatem iure.</p>
                <h2 style={{borderBottom: '5px solid rgb(1, 241, 253)', padding: '5px'}} className=" text-center mt-5">MY SKILLS: </h2>

                <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className="text-center mt-5"> Expertise: </h3>

                <div className="row justify-content-center">
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className=" m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faHtml5} size="2x" /> <br/> HTML5</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faCss3} size="2x" /> <br/> CSS3</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faBootstrap} size="2x" /> <br/> Bootstrap4</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faJsSquare} size="2x" /> <br/> JavaScript</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faReact} size="2x" /> <br/> React</p>
                </div>

                <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className=" text-center mt-5"> Comfortable: </h3>

                <div className="row justify-content-center">
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className=" m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faNodeJs} size="2x" /> <br/> Node JS</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faJsSquare} size="2x" /> <br/> Mongo DB</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> Redux</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> JQuery</p>
                </div>

                <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className=" text-center mt-5"> Familiar: </h3> 

                <div className="row justify-content-center">
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className=" m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> JavaScript</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> JavaScript</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> JavaScript</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> JavaScript</p>
                </div>
                <h3 style={{backgroundColor: ' rgb(1, 241, 253)', padding: '8px', width: '15%'}} className=" text-center mt-5"> Tools: </h3> 
                
                <div className="row justify-content-center">
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className=" m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> JavaScript</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> JavaScript</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"> <img style={{width:'32px', height: '32px'}} src={redux} alt=""/> <br/> JavaScript</p>
                <p style={{border: '3px solid rgb(1, 241, 253)',padding: '5px'}} className="m-1 col-lg-2 col-xl-2 col-md-3 bg-secondary text-white col-sm-6 col-xm-12 text-center align-self-center"><FontAwesomeIcon icon={faNode} size="2x" /> <br/> JavaScript</p>
                </div>
            </div>
        </div>
    );
};

export default About;