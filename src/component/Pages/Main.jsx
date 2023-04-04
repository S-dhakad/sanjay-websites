import React, { useEffect } from "react";
import "../Style/Main.css";
import { BsDownload } from "react-icons/bs";
import { NavLink, Link,useParams } from "react-router-dom";

export default function Main() {

  const id = useParams(); 

console.log("id ",id)
  
  useEffect(()=>{

    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    
      var that = this;
      var delta = 200 - Math.random() * 100;
    
      if (this.isDeleting) {
        delta /= 2;
      }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function () {
        that.tick();
      }, delta);
    };
    
    window.onload = function maindata () {
      var elements = document.getElementsByClassName("typewrite");
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    };

  },[id])
  return (
    <>
      <div className="containerded">
        <div className="container mt-2">
          <div className="row">
            <div className="col-lg-7 col-md-6 align-items-center mt-5 menuinfo">
              <div className="title-heading mt-4 py--50">
                <h1 className="heading text-black">Here I'am Sanjay Dhakad</h1>
                <p className="pera-title text-light-muted">
                I am Sanjay Dhakad a frontend web developer and android developer a freelance I am b tech cs student
                </p>
                <div className="hero-btn mt-4 pt-2">
                  <NavLink to='//wa.me/+916263817082' target="_blank" className="btn btn-primary rounded me-2 ">
                    Hire Me
                  </NavLink>
                  {/* <Link
                    to="public\images\MongoDB.png"
                    download
                    className="btn btn-outline-primary rounded text-black ml-2"
                  >
                    Download CV{""} <BsDownload />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="home-image mt-3">
                <img
                  src="\images\IMG_20220922_231710.jpg"
                  alt=""
                  className="img-fluid mx-auto position-relative"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ***********     seconed section *********** */}

        <div class="container mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="card public-profile border-0 rounded shadow"
                style={{ zIndex: "1" }}
              >
                <div className="card-body information">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 text-md-start p-0">
                      <div className="about-details key-feature bg-light">
                        <div className="media-body content">
                          <h6 className="title mb-2">Personal Details</h6>
                          <div className="bor-bottom mt-2 mb-2"></div>
                          <p
                            className="text-muted mb-2 mt-3 font-14"
                            style={{ width: "102%" }}
                          >
                            <Link href="mailto: mrsanjaydhakad986@gmail.com">Email: </Link>  mrsanjaydhakad986@gmail.com
                          </p>
                          <p className="text-muted mb-2 font-14">
                            <Link to="/">Languages: </Link> Hindi,English
                          </p>
                          <p className="text-muted mb-0 font-14">
                            <NavLink to="/">Nationality: </NavLink>  India
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-9 col-md-8">
                      <div className="row align-items-end">
                        <div className="col-md-12 text-md-start mt-4 mt-sm-0">
                          <h4>
                            <NavLink
                              to="/"
                              className="typewrite"
                              data-period="2000"
                              data-type='[ "I am Web Developer ", "I am Frontend Developer", "I am React.js Developer", "I Love to Develop." ]'
                            >
                              <span className="wrap"></span>
                            </NavLink>
                          </h4>
                          <p className="text-light-muted mt-2">
                            Obviously I'm a Web Designer. Web Developer with
                            over 1 years of experience. Experienced with all
                            stages of the development cycle for dynamic web
                            projects. The as opposed to using 'Content here,
                            content here', making it look like readable English.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
  <div class="circle"></div>
</div>
      {/* *******Work *************************************** */}
   
    </>
  );
}

