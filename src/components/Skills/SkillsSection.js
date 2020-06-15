import React from 'react'
import MyCurrSkills from './MyCurrSkills'
import { GoLinkExternal } from 'react-icons/go'

const Certifications = () => {
  return (
    <div className=' mb-2'>
      <h3 className='text-left text-accent mb-4'>Certifications</h3>
      <ul className='text-xxs md:text-xs list-disc list-inside'>
        <li>
          <a
            className='nav-section'
            alt='About ServiceNow Certified Application Developer certification'
            href='https://www.servicenow.com/services/training-and-certification/certified-application-developer.html'
          >
            <strong>ServiceNow</strong> Certified Application Developer
            <span>
              <GoLinkExternal className='inline -mt-3 text-xxs ml-1' />
            </span>
          </a>
        </li>
        <li>
          <a
            className='nav-section'
            alt='About ServiceNow Certified Application Developer certification'
            href='https://www.servicenow.com/services/training-and-certification/certified-application-developer.html'
          >
            <strong>ServiceNow</strong> Suite Certification - ITSM Professional
            <span>
              <GoLinkExternal className='inline -mt-3 text-xxs ml-1' />
            </span>
          </a>
        </li>
        <li>
          <a
            className='nav-section'
            alt='About ServiceNow Certified Application Developer certification'
            href='https://www.servicenow.com/services/training-and-certification/certified-system.html'
          >
            <strong>ServiceNow</strong> Certified System Administrator
            <span>
              <GoLinkExternal className='inline -mt-3 text-xxs ml-1' />
            </span>
          </a>
        </li>
        <li>
          <a
            className='nav-section'
            alt='About ServiceNow Certified Application Developer certification'
            href='https://www.servicenow.com/content/dam/servicenow/other-documents/training/snmc-blueprint.pdf'
          >
            <strong>ServiceNow</strong> Micro-Certification - Service Portal
            <span>
              <GoLinkExternal className='inline -mt-3 text-xxs ml-1' />
            </span>
          </a>
        </li>
        <li>
          <a
            className='nav-section'
            alt='Homepage for my Design Academy certification'
            href='https://designacademy.io/'
          >
            <strong>Design Academy</strong> - Design Fundamentals Live
            <span>
              <GoLinkExternal className='inline -mt-3 text-xxs ml-1' />
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}

const SkillsSection = () => {
  return (
    <div id='skills' className='flex justify-center mb-20'>
      <div
        data-aos='fade-up'
        data-aos-duration='300'
        className='sm:w-3/5 bg-accent shadow-big flex flex-col p-6'
        style={{ backgroundColor: '#E5EFFF' }}
      >
        <h3 className='text-left text-accent mb-3 flex justify-between'>
          Technical Proficiencies
        </h3>
        <div className='flex'>
          <div>
            {MyCurrSkills().proficiencies.map((prof, i) => {
              return (
                <div className='mb-1 text-branddark' key={i}>
                  <strong className='text-xxs md:text-xs'>
                    {prof.heading}:
                  </strong>{' '}
                  <small className='text-xxs md:text-xs'>
                    {prof.subHeading}
                  </small>
                </div>
              )
            })}
          </div>
        </div>
        <hr className='my-6 h-px w-1/2' />
        <Certifications />
      </div>
    </div>
  )
}

export default SkillsSection
