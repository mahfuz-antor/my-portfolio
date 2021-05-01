import React from 'react';
import mohanonda from '../../file-img/Mohanonda IT.png';
import './Projects.css';

const ProjectOne = () => {
    return (
        <div>
            <div className="main-content">
                <div className=" row justify-content-center pt-1">
                    <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xm-12 d-flex">
                        <img className="align-self-center img-round" style={{ height: '80%', width: '100%' }} src={mohanonda} alt="" />
                    </div>
                    <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12 col-xm-12">
                        <h2>Mohanonda IT</h2>
                        <p>It is an IT Service Provider  Project. Which provide some services for the customer. In this project, Google login must be used for everyone. I am listed below the other features of this Site.</p>
                        <h5>Features:</h5>
                        <p className="ml-2"> &#9755; A customer can book a service. </p>
                        <p className="ml-2"> &#9755; A customer can give a review.</p>
                        <p className="ml-2"> &#9755; An admin can add service.</p>
                        <p className="ml-2"> &#9755; An admin can update booking status , add another admin using by email.</p>
                        <p className="ml-2"> &#9755; Finally, the admin panel is protected.</p>
                        <h4>Technologies:</h4>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">HTML5</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">CSS3</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Bootstrap4</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">React Bootstrap</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">JavaScript</span></p>
                      
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">React.js</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Node.js</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Express.js</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Mongo DB</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Github</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Heroku</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Firebase</span></p>
                        
                       
                        <div className="mb-2 mt-3 btnFlex">
                            <a className="mr-2 p-2 rounded bg-info text-white linkStyle btnFlex" href="https://my-complete-project-25e25.web.app/" target="-blank">Live Link</a>
                            <a className="mr-2 p-2 rounded  text-white bg-black btnFlex" href="https://github.com/mahfuz-antor/mohanonda-IT" target="-blank">Client Code</a>
                            <a className="mr-2 p-2 rounded  text-white bg-black btnFlex" href="https://github.com/mahfuz-antor/mohanonda-IT-server" target="-blank">Server Code</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectOne;