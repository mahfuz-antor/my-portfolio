import React from 'react';
import mohanonda from '../../file-img/Mohanonda IT.png';
import './Projects.css';

const ProjectFive = () => {
    return (
        <div>
             <div className="main-content">
                <div style={{marginRight: '0px'}} className="d-flex flex-row justify-content-center pt-1">
                    <div className="col-md-5 d-flex">
                        <img className="align-self-center img-round" style={{ height: '80%', width: '100%' }} src={mohanonda} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h2>Mohanonda IT</h2>
                        <p>It is an IT Service Provider  Project. Which provide some services for the customer. In this project, Google login must be used for everyone. I am listed below the other features of this Site.</p>
                        <h5>Features:</h5>
                        <p className="ml-2"> &#9755; A customer can book a service. </p>
                        <p className="ml-2"> &#9755; A customer can give a review.</p>
                        <p className="ml-2"> &#9755; An admin can add service.</p>
                        <p className="ml-2"> &#9755; An admin can update booking status , add another admin using by email.</p>
                        <p className="ml-2"> &#9755; Finally, the admin panel is protected.</p>
                        <h3>Technologies:</h3> <br />
                        <span className="p-2 bg-dark rounded text-white">HTML5</span>
                        <span className="p-2 ml-3  bg-dark rounded text-white">CSS3</span>
                        <span className="p-2 ml-3 bg-dark rounded text-white">Bootstrap4</span>
                        <span className="p-2 ml-3 bg-dark rounded text-white">React Bootstrap</span>
                        <span className="p-2 ml-3 bg-dark rounded text-white">JavaScript</span> 
                        <span className="p-2 ml-3 bg-dark rounded text-white">React.js</span>
                        <span className="p-2 ml-3 bg-dark rounded text-white">Node.js</span> <br /> <br />
                        <span className="p-2  bg-dark rounded text-white">Express.js</span>
                        <span className="p-2 ml-3 bg-dark rounded text-white">Mongo DB</span>
                        <span className="p-2 ml-3 bg-dark rounded text-white">Github</span> 
                        <span className="p-2 ml-3 bg-dark rounded text-white">Heroku</span>
                        <span className="p-2 ml-3 bg-dark rounded text-white">Firebase</span> <br /> <br />
                        <div className="mb-2">
                            <a className="mr-2 p-2 rounded bg-info text-white linkStyle" href="https://my-complete-project-25e25.web.app/" target="-blank">Live Link</a>
                            <a className="mr-2 p-2 rounded  text-white bg-black" href="https://github.com/mahfuz-antor/fruits-village-server" target="-blank">Client Code</a>
                            <a className="mr-2 p-2 rounded  text-white bg-black" href="https://github.com/mahfuz-antor/fruits-village" target="-blank">Server Code</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectFive;