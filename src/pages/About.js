import React from "react";

import HorizontalBarChart from "../components/HorizontalBarChart";
import xavier_picture from "../images/my_picture/xavier_picture.jpeg";
import SocialMedia from "../components/SocialMedia";
import LinkButtons from "../components/LinkButtons";
import FadeIn from "../components/FadeIn";
import HamburgerBtn from "../components/HamburgerBtn";
import SkillsIcons from "../components/SkillsIcons";

function About({isLargerThanIPad, isSmallerThanIPad }) {
  return (
    <FadeIn>
      <section id="about-section" className="flex-fill p-3 py-5 bg-light shadow-lg">
        <h1 className="mb-0 rale-text">About</h1>
        <hr />
        {isLargerThanIPad && <LinkButtons />}
        {isSmallerThanIPad && <HamburgerBtn />}
        <div className="row">
          <div className="col-lg-6">
            <div className="">
              <img
                className="img-fluid"
                src={xavier_picture}
                alt="Photograph of Xavier"
                style={{width:"150px", borderRadius: "10px"}}
              />
              <h3 className="text-bg my-3">About Me</h3>
              <div style={{ width: "60%", margin: "auto auto 20px" }}>
                <p className="about-detail">
                  I'm a detail-oriented, diligent, and self-motivated Full Stack Developer based
                  in Orlando, Florida.
                </p>
                <SocialMedia />
                <h5 className="text-dark m-0">E-mail: <span className="text-email" style={{wordWrap: "break-word"}}>dxfrancis.coding@gmail.com</span></h5>
                
              </div>
            </div>
          </div>
          <div className="col-lg-5">
          {isLargerThanIPad && <HorizontalBarChart /> }
          {isSmallerThanIPad && <SkillsIcons />}
            
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default About;
