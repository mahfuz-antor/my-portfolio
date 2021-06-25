import React from 'react';
import array from '../../file-img/arrayInJavas.png';
import random from '../../file-img/randomTenJs.jpg';
import different from '../../file-img/someDiffConcept.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const BlogDetails = () => {
    return (
        <div >
            {/* <Navbar></Navbar> */}
            {/* <Header></Header> */}
            <h2 style={{ padding: '5px'}} className=" text-center mt-5 text-white animate__animated animate__zoomIn"> My Blogs: </h2>
            <div style={{marginRight: '0px'}} className="row justify-content-center p-5 animate__animated animate__zoomIn">
            <a style={{border: '3px solid rgb(6, 245, 102)', borderRadius: '10px', backgroundColor: 'white'}} className="col-md-3 m-2 p-2" href="https://antorcnjwork.medium.com/lets-learn-javascript-array-for-assign-multiple-values-in-a-variable-f144be711ea8" target="-blank">
                <div>
                    <img src={array} alt="" style={{width: '100%', height: '145px', borderRadius:'10px',}} />
                    <h5 className="text-justify p-2"> Let’s learn JavaScript Array for assign multiple values in a variable </h5>
                    <p className="text-justify">We know that JavaScript is the most powerful dynamic language. Here I will describe the JavaScript array. We used a variable to assign a value but a variable cannot contain more value, for this reason, we use an array to assign multiple values. An array’s length will be changed at any time. Let’s see an array example.  </p>
                    <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
                </div>
                </a>
                <a style={{border: '3px solid rgb(6, 245, 102)', borderRadius: '10px', backgroundColor: 'white'}} className="col-md-3 m-2 p-2" href="https://antorcnjwork.medium.com/some-different-concept-of-javascript-4226613279fe" target="-blank">
                <div>
                    <img src={different} alt="" style={{width: '100%', height: '145px', borderRadius:'10px',}} />
                    <h5 className="text-justify p-2"> Some different concept of JavaScript </h5>
                    <p className="text-justify">JavaScript is the most powerful and open-source dynamic language. We can easily learn it from any online platform. Today I will discuss some different concepts of JavaScript. These concepts do not use in our regular way. But sometimes, it is needed. In this article, we will learn about web caching, primitive and reference value, cross-browser, error handling, etc.</p>
                    <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
                </div>
                </a>
               <a style={{border: '3px solid rgb(6, 245, 102)', borderRadius: '10px', backgroundColor: 'white'}} className="col-md-3 m-2 p-2" href="https://antorcnjwork.medium.com/ten-random-concepts-of-javascript-10377518331e" target="-blank">
               <div >
                    <img src={random} alt="" style={{width: '100%', height: '145px', borderRadius:'10px',}} />
                    <h5 className="text-justify p-2"> Ten Random concepts of JavaScript </h5>
                    <p className="text-justify">We know that JavaScript is a more powerful scripting language. It is a lightweight and dynamic language with sported object-oriented programming. Today we will learn about API, truthy and falsy value, null vs undefined, double and triple equal, scope, block scope, bind, call, apply, etc.  <br />  API: API means application programming interface.</p> <br /> 
                    <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
                </div>
               </a>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default BlogDetails;