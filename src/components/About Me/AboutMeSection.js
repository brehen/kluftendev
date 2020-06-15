import React from 'react';
import '../../css/style.css';
import AboutMePic from './AboutMePic';
import BackgroundShape from '../../assets/curvyend.svg';
import { MdContactPhone, MdContactMail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';

const AboutMe = () => (
  <div
    data-aos="fade-up"
    data-aos-duration="300"
    data-aos-offset="150"
    className="-my-16 p-6 container mx-auto about-me-card 
    mb-8 sm:w-3/5 border-solid border-black border bg-white shadow-big my-element"
  >
    <div className="flex flex-col md:flex-row sm:flex-wrap bg-gray-200 justify-center">
      <div className="w-full">
        <h3 className="text-left text-accent mb-3 flex justify-between">
          About me
        </h3>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="md:w-2/3">
            <p className="mb-2 text-xxs">
              I graduated with a Bsc. in Computer Science from Oslo
              Metropolitian University in 2017. I developed, with my group, a
              custom application for ServiceNow as our Bachelor Thesis. This
              project launched my career into the ServiceNow-O-sphere where I've
              been thriving ever since. <br></br>
              <br></br> Since starting full time as a ServiceNow consultant I've
              been mainly working with the front facing Service Portal where
              I've specialized my efforts into creating new and amazing custom
              experiences for our customers.
              <br></br>
              <br></br>
              On my free time I enjoy exercising (recently invested in a road
              bike!), hiking, playing D&D and make the best food a hobby chef
              can cook.
            </p>
          </div>
          <div className="md:ml-6 mb-2">
            <AboutMePic />
            <div className="w-full mt-2">
              <div className="flex items-start flex-col">
                <h3 className="text-accent mb-3 md:hidden">Contact Details</h3>
                <p className="mb-1 text-gray text-xxs">
                  Marius Nilsen Kluften, Oslo
                </p>
                <a
                  className="text-accent text-xxs nav-section flex items-center"
                  title="Call me! Maybe!"
                  href="tel:4745434908"
                >
                  <span className="mr-1">
                    <MdContactPhone />
                  </span>
                  +47 454 34 908
                </a>
                <a
                  className=" text-accent text-xxs nav-section flex items-center"
                  href="mailto:mkluften93@gmail.com"
                  alt="Mail me!"
                  title="Mail me!"
                >
                  <span className="mr-1">
                    <MdContactMail />
                  </span>
                  mkluften93@gmail.com
                </a>
                <a
                  className="mb-1 text-accent text-xxs nav-section flex items-center"
                  href="https://www.linkedin.com/in/marius-nilsen-kluften-89b66ba1/"
                  alt="Reach out to me on LinkedIn"
                  title="LinkedIn link"
                >
                  <span className="mr-1">
                    <FaLinkedinIn />
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AboutMeSection = () => (
  <section id="aboutMe">
    <div className="flex justify-center bg-section">
      <AboutMe />
    </div>
    <div>
      <BackgroundShape className="w-full h-full " />
    </div>
  </section>
);

export default AboutMeSection;
