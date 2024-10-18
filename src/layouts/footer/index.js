import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import './style.scss';

function Footer() {    
    const currentDate = new Date().getFullYear();
    return (
        <section className="info_section pt-4 mt-5">
            <div className="social_container">
                <div className="social_box">
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
            <div className="info_container ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 text-center">
                            <h6>
                                ABOUT US
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed doLorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center">
                            <h6>
                                NEED HELP
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed doLorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center">
                            <h6>
                                CONTACT US
                            </h6>
                            <div className="info_link-box  text-center">
                                <a href="/">
                                    <FontAwesomeIcon className='text-white' icon={faMapMarker} />
                                    <span>&nbsp;&nbsp; Gb road 123 london Uk </span>
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon className='text-white' icon={faPhone} />
                                    <span>&nbsp;&nbsp; +01 12345678901</span>
                                </a>
                                <a href="/">
                                    <FontAwesomeIcon className='text-white' icon={faEnvelope} />
                                    <span>&nbsp;&nbsp; demo@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className=" footer_section">
                <div className="container">
                    <p>
                        &copy; {currentDate} All Rights Reserved By <b>Gonzo</b>
                    </p>
                </div>
            </footer>
        </section>
    );
}

export default Footer;