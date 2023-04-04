import React,{useState} from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { NavLink,Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
    const [Name, setName] = useState("")
 
    const [Sub, setSub] = useState("")
    const [email, setemail] = useState("")
    const [sms, setsms] = useState("")
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
<div className='containerded'>
            <section className="section pb-0 mt-3 " id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="container-title text-center mb-4 pb-2">
                                <div className="titles">
                                    <h2 className="title text-capitalize mb-4">Contact Me</h2>
            

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
                                    <p className="text-light-muted">Dear you can contact me on this number</p>
                                    <a href="tel:+916263817082" className="text-primary">+91 6263817082</a>
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
                                    <p className="text-light-muted">Dear you can contact me on this Email</p>
                                    <a href="mailto:mrsanjaydhakad986@gmail.com" className="text-primary">mrsanjaydhakad986@gmail.com</a>
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
                                    <p className="text-light-muted">Dear you can contact me on this linkedin</p>
                                    <NavLink to="//www.linkedin.com/in/mr-sanjay-dhakad-622b2a225" target="_blank" className="map-popup-view text-primary">View MY linkedin Profile</NavLink>
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
                                <div  method='post' name="myForm" onSubmit={handlesubmitdata}>
                                    <p id="error-msg"></p>
                                    <div id="simple-msg"></div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="form-group">
                                                        <input  id="name" type="text" onChange={(Event) => setName(Event.target.value)} className="form-control border rounded" placeholder="First Name :" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="form-group">
                                                        <input  id="email" type="email" onChange={(Event) => setemail(Event.target.value)} className="form-control border rounded" placeholder="Your email :" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input  type='tel' id="subject" onChange={(Event) => setSub(Event.target.value)} className="form-control border rounded" placeholder="Your number :" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <textarea  id="comments" onChange={(Event) => setsms(Event.target.value)} rows="4" className="form-control border rounded" placeholder="Your Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-end">
                                        <a href={`https://wa.me/+916263817082?text=  Name: ${Name} Email: ${email}  Number:${Sub} Message: ${sms} `}>   <button  className="submitBnt btn btn btn-primary rounded" > Send Message</button></a>
                                        </div>
                                    </div>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </div>


        </>
    )
}
