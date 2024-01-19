import React from 'react'
import { FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa'

const BasicDetails = ({ controller }) => {
    const[
      campaignerName,
      setCampaignerName,
      campaignerEmail,
      setCampaignerEmail,
      campaignerPhone,
      setCampaignerPhone,
      type,
      setType,
      benificiaryName,
      setBenificiaryName,
      benificiaryEmail,
      setBenificiaryEmail,
      benificiaryPhone,
      setBenificiaryPhone,
    ] = controller
return (
<section className='grid gap-y-4'>
    <div className='font-bold mt-3 text-lg'>Campaigner's details</div>
    <select onChange={e=>setType(e.target.value)} className='border w-full p-3 rounded-lg border-gray-200 bg-gray-200'>
        <option value="" disabled>Select beneficiary type</option>
        <option value="individual">Individual</option>
        <option value="organisation">Organisation</option>
    </select>
    <input value={campaignerName} onChange={e=>setCampaignerName(e.target.value)} type="text" placeholder='Full name' className='border w-full p-3 rounded-lg border-gray-300' />
    <input value={campaignerEmail} onChange={e=>setCampaignerEmail(e.target.value)} type="email" placeholder='Email address' className='border w-full p-3 rounded-lg border-gray-300' />
    <input value={campaignerPhone} onChange={e=>setCampaignerPhone(e.target.value)} type="tel" placeholder='Phone number' className='border w-full p-3 rounded-lg border-gray-300' />

    <div className='font-bold mt-3 text-lg'>Beneficiary details</div>
    <input value={benificiaryName} onChange={e=>setBenificiaryName(e.target.value)} type="text" placeholder='Beneficiary name' className='border w-full p-3 rounded-lg border-gray-300' />
    <input value={benificiaryEmail} onChange={e=>setBenificiaryEmail(e.target.value)} type="email" placeholder='Email address' className='border w-full p-3 rounded-lg border-gray-300' />
    <input value={benificiaryPhone} onChange={e=>setBenificiaryPhone(e.target.value)} type="tel" placeholder='Phone number' className='border w-full p-3 rounded-lg border-gray-300' />
</section>
)
}

export default BasicDetails