import React from 'react'

const BankDetails = () => {
  return (
    <>
      <div className="text-xl font-bold py-4">Benificiary bank details</div>
      <div className='grid gap-y-3'>
        <div className='border rounded p-3 text-gray-600 bg-gray-100'>Current</div>
        <div className='border rounded p-3 text-gray-600 bg-gray-100'>Account number</div>
        <div className='border rounded p-3 text-gray-600 bg-gray-100'>IFSC code</div>
        <div className='border rounded p-3 text-gray-600 bg-gray-100'>Bank name</div>
        <div className='border rounded p-3 text-gray-600 bg-gray-100'>Branch name</div>
        <div className='border rounded p-3 text-gray-600 bg-gray-100'> Documents</div>
      </div>
    </>
  );
}

export default BankDetails