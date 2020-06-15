import React from 'react'
import { GiCloudDownload } from 'react-icons/gi'

const DownloadResume = props => {
  return (
    <a
      id='fancy-button'
      className='bg-accent text-white mt-auto
      px-2 py-1 shadow-med fancy-button md:w-3/4
      text-xxs  flex justify-around items-center w-24 sm:w-full'
      href='https://drive.google.com/file/d/1C4RWavo99vUIdrwZsOuoXcJZ3orTCpAu/view?usp=sharing'
      target='_blank'
      rel='noopener noreferrer'
    >
      <GiCloudDownload />
      Download Resume
    </a>
  )
}

export default DownloadResume
