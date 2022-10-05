import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
    function handlesubmitdata() {
        toast.success('The form was submitted successfully.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
    return (
        <>

            <section className="section pb-0 mt-3" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="container-title text-center mb-4 pb-2">
                                <div className="titles">
                                    <h2 className="title text-capitalize mb-4">Contact Me</h2>
                                    <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mt-4 pt-2">
                            <div className="contact-detail text-center">
                                <div className="icon">
                                    <FiPhoneCall size={30} />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Phone</h5>
                                    <p className="text-light-muted">Promising development turmoil inclusive education transformative community</p>
                                    <NavLink to="tel:+916263817082" className="text-primary">+91 6263817082</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4 pt-2">
                            <div className="contact-detail text-center">
                                <div className="icon">
                                    <SiGmail size={30} />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">Email</h5>
                                    <p className="text-light-muted">Promising development turmoil inclusive education transformative community</p>
                                    <NavLink to="mailto:mrsanjaydhakad986@gmail.com" className="text-primary">mrsanjaydhakad986@gmail.com</NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4 pt-2">
                            <div className="contact-detail text-center">
                                <div className="icon">
                                    <GrLinkedin size={30} />
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title">linkedin</h5>
                                    <p className="text-light-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                                    <NavLink to="//www.linkedin.com/in/mr-sanjay-dhakad-622b2a225" className="map-popup-view text-primary">View MY linkedin Profile</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="custom-form mb-sm-30">
                                <form action="https://formspree.io/f/mjvzbneb" method='post' name="myForm" onSubmit={handlesubmitdata}>
                                    <p id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="form-group">
                                                        <input name="name" id="name" type="text" className="form-control border rounded" placeholder="First Name :" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="form-group">
                                                        <input name="email" id="email" type="email" className="form-control border rounded" placeholder="Your email :" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input name="subject" id="subject" className="form-control border rounded" placeholder="Your subject :" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <textarea name="comments" id="comments" rows="4" className="form-control border rounded" placeholder="Your Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-end">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn btn-primary rounded" value="Send Message" />
                                        </div>
                                    </div>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
