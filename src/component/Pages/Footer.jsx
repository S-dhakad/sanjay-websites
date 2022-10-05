import React from "react";
import "../Style/Nav.css";
import { NavLink } from "react-router-dom";
import { BsLinkedin, BsWhatsapp, BsTelephoneInbound } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
export default function Footer() {
  return (
    <>
      <div class="footer bg-light mt-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <span class="text-primary border-0">Code With S.D</span>

              <p class="para-desc mx-auto mt-5 text-black">
                Obviously I'm a Web Designer. Experienced with all stages of the
                development cycle for dynamic web projects.
              </p>
              <ul class="list-unstyled mb-0 mt-4 social-icon">
                <li class="list-inline-item mx-2">
                  <NavLink
                    to="//www.linkedin.com/in/mr-sanjay-dhakad-622b2a225"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsLinkedin size={25} />
                  </NavLink>
                </li>
                <li class="list-inline-item mx-2">
                  <NavLink
                    to="//wa.me/+916263817082"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsWhatsapp size={25} />
                  </NavLink>
                </li>
                <li class="list-inline-item mx-2">
                  <NavLink to="tel:+916263817082" class="rounded-circle">
                    <BsTelephoneInbound size={25} />
                  </NavLink>
                </li>
                <li class="list-inline-item mx-2">
                  <NavLink
                    to="mailto:mrsanjaydhakad986@gmail.com"
                    class="rounded-circle"
                  >
                    <BiMailSend size={30} />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightissue mt-3">
        <h6>Copyright © 2022 code with S.D </h6>
      </div>
    </>
  );
}
