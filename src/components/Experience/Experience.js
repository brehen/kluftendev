import React from 'react';
import IconGroup from './IconGroup';
import Icon from './Icon';
import TrickyIcon from './TrickyIcon';
import { MdCode } from 'react-icons/md';
import { IoIosGlobe, IoIosBasket, IoIosCloud, IoLogoUsd } from 'react-icons/io';
import {
  GiThink,
  GiJetFighter,
  GiEggClutch,
  GiDiceTwentyFacesTwenty
} from 'react-icons/gi';
import BackgroundShape from '../../assets/curveyendbottom.svg';

const PersonalExpContent = () => {
  return (
    <div className="w-full">
      <h1 className="text-md text-left border-b pb-2">
        <span className="text-accent">Personal Experience</span>
      </h1>
      <p className="mt-2 text-xxs">
        Until I graduated with a bachelor within Computer Science from OsloMet I
        learned some key skills from previous job and life experiences I may (or
        may not) use every day.
      </p>
      <div className="my-6 flex flex-col items-center">
        <h3 className="self-start text-xs">
          Some of my most useful skills are as follows:
        </h3>
        <div className="my-5 flex justify-center">
          <div className="flex justify-between  lg:w-4/5 flex-wrap">
            <IconGroup className="" text="Clean & pack eggs">
              <Icon className="text-md select-none">
                <GiEggClutch />
              </Icon>
            </IconGroup>
            <IconGroup className="" text="Clean & maintain F-16s">
              <Icon className="text-md select-none">
                <GiJetFighter />
              </Icon>
            </IconGroup>
            <IconGroup className="" text="Clean & write JS">
              <Icon className="text-md  select-none">
                <MdCode />
              </Icon>
            </IconGroup>

            <IconGroup
              className="mt-4"
              text=" Orchestrate bi-weekly workshops where I bring together a group
                of colleagues and/or friends to spark our creativity and work on
                the occasional personal issue. With dice. (Okay, you got me.
                It’s D&D. I’m a Dungeon Master)"
            >
              <TrickyIcon className="text-md select-none">
                <GiThink />
                <GiDiceTwentyFacesTwenty />
              </TrickyIcon>
            </IconGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

const DCExpContent = () => {
  return (
    <div>
      <h1 className="text-md text-left border-b pb-2 border-b-2">
        <span className="text-accent">
          Development and Consultant Experience
        </span>
      </h1>
      <div>
        <h2 className="text-sm text-left my-4 flex justify-between items-end">
          <a
            href="https://www.soprasteria.no/"
            alt="Link to my current employer"
          >
            Sopra Steria
          </a>
          <span className="text-xs text-accent">Dec 2017 - Current</span>
        </h2>
        <p className="text-xxs">
          I started working for Sopra Steria after I decided to focus on a
          career as a IT Consultant developing web applications on ServiceNow.
          I’ve mainly worked as a web developer throughout the full stack of
          ServiceNow - configuring and maintaining the Server Side (Back-end)
          while portraying the appropriate data in meaningful and intuitive
          layouts in the Service Portal (Front-end). I’ve also arranged multiple
          courses on developing Service Portal Widgets for colleagues interested
          in learning about developing custom widgets for our projects.
        </p>
      </div>
      <div>
        <h2 className="text-sm text-left my-4 flex justify-between align-end">
          <a
            href="https://www.syscomworld.com/no/"
            alt="Link to my previous employer, Syscom"
          >
            Syscom
          </a>
          <span className="text-xs text-accent">June 2017 - Nov 2017</span>
        </h2>
        <p className="text-xxs">
          Shortly after delivering and presenting my final project for my CS
          degree, I started working for Syscom as a consultant developing on
          ServiceNow during the following summer and part time alongside my
          Master's degree. As I worked on the platform, my interest in
          continuing my studies vaned in correalation as my interest in
          ServiceNow development grew. I decided to pause my studies to focus on
          growing a career as a consultant.
        </p>
      </div>
      <div className="my-6 mb-4">
        <h2 className="my-6 text-sm">Some of the sectors I've worked with:</h2>
        <div className="flex justify-between flex-wrap">
          <IconGroup className="w-1/4" text="Telecommunications">
            <Icon className="text-md">
              <IoIosGlobe />
            </Icon>
          </IconGroup>
          <IconGroup className="w-1/4" text="Retail">
            <Icon className="text-md">
              <IoIosBasket />
            </Icon>
          </IconGroup>
          <IconGroup className="w-1/4" text="Cloud">
            <Icon className="text-md">
              <IoIosCloud />
            </Icon>
          </IconGroup>
          <IconGroup className="w-1/4" text="Banking">
            <Icon className="text-md">
              <IoLogoUsd />
            </Icon>
          </IconGroup>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div id="education">
      <h1 className="text-md text-left border-b pb-2 border-b-2">Education</h1>
      <div>
        <h2 className="text-sm text-left my-4">
          <a
            href="https://www.oslomet.no/"
            alt="Link to the university in question"
          >
            Oslo Metropolitan University
          </a>
        </h2>
        <p className="text-xxs">
          A study which provides a comprehensive and vocational education in
          information technology directed specifically at programming, software,
          system and application development.
        </p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        style={{ backgroundColor: '#E5EFFF' }}
        className="flex sm:w-3/5 justify-center p-8 mx-auto flex-col container shadow-big"
        id="experience"
      >
        <PersonalExpContent />

        <DCExpContent />
      </div>
      <div>
        <BackgroundShape />
      </div>
    </section>
  );
};

export default Experience;
