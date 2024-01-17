import React from 'react'
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa'

const BasicDetails = () => {
return (
<section className='grid gap-y-4'>
    <div className='font-bold mt-3 text-lg'>Campaigner's details</div>
    <select className='border w-full p-3 rounded-lg border-gray-200 bg-gray-200'>
        <option value="individual" disabled>Select beneficiary type</option>
        <option value="individual">Individual</option>
        <option value="organisation">Organisation</option>
    </select>
    <input type="text" placeholder='Full name' className='border w-full p-3 rounded-lg border-gray-300' />
    <input type="email" placeholder='Email address' className='border w-full p-3 rounded-lg border-gray-300' />
    <input type="tel" placeholder='Phone number' className='border w-full p-3 rounded-lg border-gray-300' />

    <div className='font-bold mt-3 text-lg'>Beneficiary details</div>
    <input type="text" placeholder='Beneficiary name' className='border w-full p-3 rounded-lg border-gray-300' />
    <input type="email" placeholder='Email address' className='border w-full p-3 rounded-lg border-gray-300' />
    <input type="tel" placeholder='Phone number' className='border w-full p-3 rounded-lg border-gray-300' />
</section>
)
}

export default BasicDetails