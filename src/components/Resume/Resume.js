import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelopeOpen, faShareAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faLinkedin, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../Projects/Projects.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import myImg from '../../file-img/Antor.jpg';
import Header from '../Header/Header';

const Resume = () => {
    return (
        <div style={{backgroundColor:'#111'}}>
            <Navbar></Navbar>
            <Header></Header>
            <h1 className="pt-5 text-white align-content-center text-center">Welcome, My Resume Here </h1>
            <div className="resume-container bg-white text-black">
                <div style={{marginBottom: '15px',}}>
                    <img style={{width: '15%', height:'15%', float: 'right', borderRadius: '50%'}} src={myImg} alt=""/>
                    <h2 className="text-black">Md. Mahfuzur Rahman</h2> 
                    <h5 className="text-black">Junior Web Developer</h5>
                    <p className="text-black"> Address: #31, Ranibazar, Boalia, Rajshahi.	<br /> Email: mahfuz.antor21@gmail.com</p>
                    <a href="https://www.linkedin.com/in/mahfuzur-rahman-0674551ba/" target="-blank" className="pr-2 text-black"><FontAwesomeIcon icon={faLinkedin} size="1x" /> LinkedIn</a>
                    <a href="https://www.facebook.com/mdmahfuzurrahman.antor" target="-blank" className="p-2 text-black"><FontAwesomeIcon icon={faFacebook} size="1x" /> Facebook</a>
                    <a href="https://github.com/mahfuz-antor" target="-blank" className="p-2 text-black"><FontAwesomeIcon icon={faGithub} size="1x" /> Github</a>
                </div>
                <div>
                    <h3 className="bg-light p-1"> CAREER  OBJECTIVE: </h3>
                    <p className="text-black"> Willing to work hard in an IT-based company as a Front-End Developer. I am fully committed to learning any new technologies for this field of company demand. I have enough experience in Back-End Development.</p>


                </div>
                <div>
                    <h3 className="bg-light p-1"> ADDITIONAL   SKILLS: </h3>
                    <h4 className="text-black"> Expertise: <span className="h6"> HTML, CSS, Bootstrap,  JavaScript, ES6, React, JSON, Web API </span> </h4>
                    <h4 className="text-black"> Intermediate Level:   <span className="h6"> Node JS, MongoDB, React Native,  JQuery </span> </h4>
                    <h4 className="text-black"> Basic Level: <span className="h6"> Redux, Reducer, SASS, Next JS, Rechart  </span> </h4>
                    <h4 className="text-black"> Tools: <span className="h6"> VSCode, Git, Node, Firebase , Heroku, Netlify </span> </h4>
                </div>
                <div>
                    <h3 className="bg-light p-1"> PROJECT   EXPERIENCES: </h3>
                    <h4 className="text-black">Mohanonda IT</h4>
                    <p className="text-black">It is an IT Service Provider  Project. Which provide some services for the customer. In this project, Google login must be used for everyone. I am listed below the other features of this Site.</p>
                    <h5 className="text-black">Features:</h5>
                    <p className="ml-2 text-black"> &#9755; A customer can book a service. </p>
                    <p className="ml-2 text-black"> &#9755; A customer can give a review.</p>
                    <p className="ml-2 text-black"> &#9755; An admin can add service.</p>
                    <p className="ml-2 text-black"> &#9755; An admin can update booking status , add another admin using by email.</p>
                    <p className="ml-2 text-black"> &#9755; Finally, the admin panel is protected.</p>
                    <h4 className="text-black"> Technologies: <span className="h6 "> HTML5, CSS3, Bootstrap4, React Bootstrap, JavaScript, React.js, Node.js, Express.js, Mongo DB, Github, Heroku, Firebase</span> </h4>
                    <div className="mb-2 mt-3 btnFlex text-black">
                            <a className="mr-2 p-2 rounded bg-info text-black linkStyle btnFlex" href="https://my-complete-project-25e25.web.app/" target="-blank">Live Link</a>
                            <a className="mr-2 p-2 rounded  text-black bg-black btnFlex" href="https://github.com/mahfuz-antor/mohanonda-IT" target="-blank">Client Code</a>
                            <a className="mr-2 p-2 rounded  text-black bg-black btnFlex" href="https://github.com/mahfuz-antor/mohanonda-IT-server" target="-blank">Server Code</a>
                        </div>
                </div>
               

                <div>
                <h4 className="text-white"> Fruits Village  </h4>
                        <p className="text-black">It is a Fruits Shop  Project. Anyone can easily buy fruits by browsing this site. Other Features listed below: </p>
                        <h5 className="text-black">Features:</h5>
                        <p className="ml-2 text-black"> &#9755; A customer can  buy fruits. </p>
                        <p className="ml-2 text-black"> &#9755; Anyone can add fruits details for sale.</p>
                        <p className="ml-2 text-black"> &#9755; Anyone can delete fruits details.</p>
                        <p className="ml-2 text-black"> &#9755; A customer can see orders details information.</p>
                    <h4 className="text-black"> Technologies: <span className="h6"> HTML5, CSS3, Bootstrap4, React Bootstrap, JavaScript, React.js, Node.js, Express.js, Mongo DB, Github, Heroku, Firebase</span> </h4>
                    <div className="mb-2 mt-3 btnFlex text-black">
                            <a className="mr-2 p-2 rounded bg-info text-black btnFlex" href="https://full-stack-client-site.web.app/" target="-blank">Live Link</a>
                            <a className="mr-2 p-2 rounded  text-black bg-black btnFlex" href="https://github.com/mahfuz-antor/fruits-village" target="-blank">Client Code</a>
                            <a className="mr-2 p-2 rounded  text-black bg-black btnFlex" href="https://github.com/mahfuz-antor/fruits-village-server" target="-blank">Server Code</a>
                        </div>
                </div>
                <div>
                <h4 className="text-black"> City Travellers</h4>
                        <p className="text-black">Urban citizens can get tourism services from this site. A customer can easily book vehicles and see his order details by using a Google login.</p>
                        <h5 className="text-black">Features:</h5>
                        <p className="ml-2 text-black"> &#9755; A customer can book a vehicle. </p>
                        <p className="ml-2 text-black"> &#9755; A customer can see his order details.</p>
                        <p className="ml-2 text-black"> &#9755; A customer can chose the starting and ending place</p>
                    <h4 className="text-black"> Technologies: <span className="h6"> HTML5, CSS3, Bootstrap4, React Bootstrap, JavaScript, React.js, Github, Firebase</span> </h4>
                    <div className="mb-2 mt-3 btnFlex text-black">
                            <a className="mr-2 p-2 rounded bg-info text-black btnFlex" href="https://react-auth-09.web.app/" target="-blank">Live Link</a>
                            <a className="mr-2 p-2 rounded  text-black bg-black btnFlex" href="https://github.com/mahfuz-antor/city-travellers" target="-blank"> Code Link</a>
                        </div>
                </div>
            </div> <Footer></Footer>
        </div>
    );
};

export default Resume;