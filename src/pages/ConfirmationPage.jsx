import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import { FaCheck } from 'react-icons/fa'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const ConfirmationPage = () => {
  return (
    <>
      <HomeNavbar/>
      <div className='max-w-[50%] mx-auto flex items-center flex-col py-8'>
          <div className='text-xl font-bold text-center'>We have recieved your campaign creation request</div>
          <div className='text-center text-sm py-3'>Your request is with us and we are working on it, If the request aligns with our criteria and standards we will get back to you in a short time period</div>
          <div className='bg-green-600 w-max p-7 rounded-full text-3xl text-white mt-6 animate__animated animate__bounceIn'>
            <FaCheck/>
          </div>
          <div className='mt-20 animate__animated animate__fadeInUp'>
            <Link to="/"><Button size="md">Go back to home page</Button></Link>
          </div>
      </div>
    </>
  )
}

export default ConfirmationPage