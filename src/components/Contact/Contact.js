import React from 'react';
import emailjs from 'emailjs-com';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faEnvelopeOpen, faShareAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faLinkedin, faGoogle,    } from '@fortawesome/free-brands-svg-icons';

const contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_75c5hgn', 'template_r1ts0nn', e.target, 'user_53bIQIeZqSPpp6xMbl0ta')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const formStyle = {
        float:'left',
        display: 'inline'
    }

    return (
        <div  style={{backgroundColor:'#11b1c1'}}>
            {/* <Navbar></Navbar> */}
            <div style={{color: 'white',  border: '5px solid #01f1fd', marginRight: '0px', padding: '3%', backgroundColor: 'rgb(17, 177, 193)', margin: '10% 20%', borderRadius:'5px'}} className="row d-flex justify-content-center">
            <div style={formStyle} className="col-md-4">
                <h2>Contact Me</h2>

                <p>Email: mahfuz.antor@gmail.com</p>
                <h3>Follow Me</h3>
                <a href="https://www.linkedin.com/in/mahfuzur-rahman-0674551ba/" target="-blank" className="pr-2 text-white"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://www.facebook.com/mdmahfuzurrahman.antor" target="-blank" className="p-2 text-white"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="https://github.com/mahfuz-antor" target="-blank" className="p-2 text-white"><FontAwesomeIcon icon={faGoogle} size="2x" /></a>
            </div>
            <div style={formStyle} className="col-md-5">
                <form  className="contact-form " onSubmit={sendEmail}>
                    
                    {/* <label>Name</label>  */}
                    <input placeholder="Name" type="text" name="user_name" /> <br /> <br />
                    <input placeholder="Phone" type="text" name="contact_number" /> <br /> <br />
                    {/* <label>Email</label>  */}
                    <input placeholder="Email" type="email" name="user_email" /> <br /> <br />
                    {/* <label>Message</label>  */}
                    <textarea placeholder="Write Your massage" name="message" /> <br /> <br />
                    <input type="submit" value="Send" />
                </form>
            </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default contact;