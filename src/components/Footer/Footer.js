import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelopeOpen, faShareAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faLinkedin, faGoogle,    } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="">
            <div style={{backgroundColor: ' #000', borderBottom:'1px solid white',  padding:'60px 10px', overflow:'hidden', marginRight:'0px'}} className="row d-flex justify-content-center">
            <div className="col-lg-3 col-xl-3 col-md-4  text-white col-sm-12 mt-3 col-xm-12 text-center align-self-center">
                <h3 className=""> <FontAwesomeIcon icon={faAddressCard} size="1x" /> Address:</h3>
                <p>#00,Ranibazar, Rajshahi, Bangladesh</p>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-4  text-white col-sm-12 mt-3 col-xm-12 text-center align-self-center">
                <h3 className=""> <FontAwesomeIcon icon={faEnvelopeOpen} size="1x" /> Email:</h3>
                <p>mahfuz.antor21@gmail.com</p>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-4  text-white col-sm-12 mt-3 col-xm-12 text-center align-self-center">
                <h3> <FontAwesomeIcon icon={faShareAlt} size="1x" /> Social:</h3>
                <a href="https://www.linkedin.com/in/mahfuzur-rahman-0674551ba/" target="-blank" className="pr-2 text-white"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://www.facebook.com/mdmahfuzurrahman.antor" target="-blank" className="p-2 text-white"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://github.com/mahfuz-antor" target="-blank" className="p-2 text-white"><FontAwesomeIcon icon={faGoogle} size="2x" /></a>
            </div>
        </div>
        <div style={{backgroundColor: ' #000',}}>
            <h5 className="text-center p-3 text-white">Copyright &copy; all right reserved design by Mahfuz Antor </h5>
        </div>
        </div>
    );
};

export default Footer;