import React from 'react';
import emailjs from 'emailjs-com';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faEnvelopeOpen, faShareAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faLinkedin, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import email from '../../file-img/img-01.png'

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
		float: 'left',
		display: 'inline'
	}

	return (
		<div>
			{/* <Navbar></Navbar> */}

			{/* <Footer></Footer> */}

			<div class="contact1">
				<div class="container-contact1">
					<div style={formStyle} className="col-md-4 p-3 text-black">
						<img style={{ width: '60%' }} src={email} alt="IMG"></img>
						<h2>Contact Me</h2>

						<p>Email: mahfuz.antor@gmail.com</p>
						<h3>Follow Me</h3>
						<a href="https://www.linkedin.com/in/mahfuzur-rahman-0674551ba/" target="-blank" className="pr-2 text-black"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
						<a href="https://www.facebook.com/mdmahfuzurrahman.antor" target="-blank" className="p-2 text-black"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
						<a href="https://github.com/mahfuz-antor" target="-blank" className="p-2 text-black"><FontAwesomeIcon icon={faGithub} size="2x" /></a>

					</div>

					<form class="contact1-form validate-form" onSubmit={sendEmail}>
						{/* <span class="contact1-form-title">
					Get in touch
				</span> */}

						<div class="wrap-input1 validate-input" data-validate="Name is required">
							<input class="input1" type="text" name="name" placeholder="Name" />
							<span class="shadow-input1"></span>
						</div>

						<div class="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
							<input class="input1" type="text" name="email" placeholder="Email" />
							<span class="shadow-input1"></span>
						</div>

						{/* <div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input class="input1" type="text" name="subject" placeholder="Subject" />
					<span class="shadow-input1"></span>
				</div> */}

						<div class="wrap-input1 validate-input" data-validate="Message is required">
							<textarea class="input1" name="message" placeholder="Message"></textarea>
							<span class="shadow-input1"></span>
						</div>

						<div class="container-contact1-form-btn">
							<button class="contact1-form-btn">
								<span>
									Send Email
									<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>

		</div>
	);
};

export default contact;