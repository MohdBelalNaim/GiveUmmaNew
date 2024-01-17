import React from 'react'
import { Link } from 'react-router-dom'

const CampaignCard = ({index}) => {
return (
<Link to="/details">
<div
    className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform'>
    <img src={`http://picsum.photos/450/500?${index}`} className="h-[260px] object-cover w-full" alt=""/>
    <div className='p-4 space-y-3'>
        <div className='flex gap-3 items-center'>
            <img src={`http://picsum.photos/450/500?${index}`} className='w-6 h-6 object-cover rounded-full' alt="" />
            <div className='text-xs'>All Children in School</div>
        </div>
        <div className=''>
            Clean Water Project For Children In Guinea & Change Their Lives Forever
        </div>
        <div className='flex gap-4'>
            <div className='flex items-center gap-1.5'>
                <i className="bi bi-people text-[20px] text-gray-400"></i>
                <div className='text-sm'>892</div>
            </div>
            <div className='flex items-center gap-1.5'>
                <i className="bi bi-clock text-[18px] text-gray-400"></i>
                <div className='text-sm'>140 days left</div>
            </div>
        </div>
        <div className='w-full bg-gray-200 h-1'>
            <div className="w-40 h-1 primary"></div>
        </div>
        <div className="flex items-center">
            <div>
                <div className="font-semibold text-xl">
                    ₹ 120000
                </div>
                <div className='text-sm text-gray-500'>
                    funded of ₹ 123000
                </div>
            </div>
            <button
                className='primary text-white py-2 px-4 text-sm font-semibold rounded-full ml-auto'>
                SUPPORT
            </button>
        </div>
    </div>
</div>
</Link>
)
}

export default CampaignCard