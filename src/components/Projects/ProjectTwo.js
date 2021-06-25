import React from 'react';
import mohanonda from '../../file-img/fruits.png';
import './Projects.css';

const ProjectTwo = () => {
    return (
        <div>
             <div className=" container mb-5">
                <div style={{marginRight: '0px'}} className="main-content row justify-content-center pt-1 m-2">
                    <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xm-12 d-flex">
                        <img className="align-self-center img-round" style={{ height: '80%', width: '100%' }} src={mohanonda} alt="" />
                    </div>
                    <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12 col-xm-12">
                        <h2> Fruits Village  </h2>
                        <p>It is a Fruits Shop  Project. Anyone can easily buy fruits by browsing this site. Other Features listed below: </p>
                        <h5>Features:</h5>
                        <p className="ml-2"> &#9755; A customer can  buy fruits. </p>
                        <p className="ml-2"> &#9755; Anyone can add fruits details for sale.</p>
                        <p className="ml-2"> &#9755; Anyone can delete fruits details.</p>
                        <p className="ml-2"> &#9755; A customer can see orders details information.</p>
                        <h3>Technologies:</h3> <br />
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
                            <a className="mr-2 p-2 rounded bg-info text-white btnFlex" href="https://full-stack-client-site.web.app/" target="-blank">Live Link</a>
                            <a className="mr-2 p-2 rounded  text-white bg-black btnFlex" href="https://github.com/mahfuz-antor/fruits-village" target="-blank">Client Code</a>
                            <a className="mr-2 p-2 rounded  text-white bg-black btnFlex" href="https://github.com/mahfuz-antor/fruits-village-server" target="-blank">Server Code</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectTwo;