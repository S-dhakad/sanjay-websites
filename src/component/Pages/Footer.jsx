import React from "react";
import "../Style/Nav.css";
import { NavLink,Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div class="footer bg-light mt-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <span class="text-primary border-0">Code With  MR S.D</span>

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
                  <i class="fab fa-linkedin fa-lg"></i>
                  </NavLink>
                </li>
                <li class="list-inline-item mx-2">
                  <NavLink
                to='//wa.me/+916263817082' target="_blank"
                 
                  
                  >
                   <i class="fab fa-whatsapp fa-lg"></i>
                  </NavLink>
                </li>
                <li class="list-inline-item mx-2">
                
                  <a href="https://instagram.com/mrsanjaydhakad42?igshid=ZDdkNTZiNTM="    rel="noreferrer"
                    target="_blank"  class="rounded-circle">  <i class="fab fa-instagram-square fa-lg"></i></a>
                </li>
                <li class="list-inline-item mx-2">
                  <a
                    href="https://github.com/S-dhakad"
                    class="rounded-circle"
                    target="_blank"
                  >
            <i class="fab fa-github fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightissue mt-3">
        <h6>Copyright © 2022 code with MR S.D </h6>
      </div>
    </>
  );
}
