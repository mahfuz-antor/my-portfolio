import React from 'react';
import mohanonda from '../../file-img/Mohanonda IT.png';
import './Projects.css';

const ProjectsThree = () => {
    return (
        <div>
             <div className="main-content">
                <div className="row justify-content-center pt-1">
                    <div className="col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xm-12 d-flex">
                        <img className="align-self-center img-round" style={{ height: '80%', width: '100%' }} src={mohanonda} alt="" />
                    </div>
                    <div className="col-lg-7 col-xl-7 col-md-7 col-sm-12 col-xm-12">
                        <h2> City Travellers</h2>
                        <p>Urban citizens can get tourism services from this site. A customer can easily book vehicles and see his order details by using a Google login.</p>
                        <h5>Features:</h5>
                        <p className="ml-2"> &#9755; A customer can book a vehicle. </p>
                        <p className="ml-2"> &#9755; A customer can see his order details.</p>
                        <p className="ml-2"> &#9755; A customer can chose the starting and ending place</p>
                        <h3>Technologies:</h3> <br />
                        <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">HTML5</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">CSS3</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Bootstrap4</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">React Bootstrap</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">JavaScript</span></p>
                      
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">React.js</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Github</span></p>
                       <p className="d-inline"><span className="mr-2 mb-1 p-2 badge badge-dark">Firebase</span></p>
                        <div className="mb-2 mt-3 btnFlex">
                            <a className="mr-2 p-2 rounded bg-info text-white btnFlex" href="https://react-auth-09.web.app/" target="-blank">Live Link</a>
                            <a className="mr-2 p-2 rounded  text-white bg-black btnFlex" href="https://github.com/mahfuz-antor/city-travellers" target="-blank"> Code Link</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsThree;