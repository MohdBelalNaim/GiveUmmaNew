import React from 'react'

const Footer = () => {
return (
<div className='container mx-auto py-8 max-lg:px-4 border-t grid grid-cols-3 gap-10 max-sm:grid-cols-1 max-sm:px-[18px] lg:px-8'>
    <div>
        <div className='font-semibold'>
            About
        </div>
        <div className='text-sm mt-2'>
            Milaap Social Ventures India Pvt. Ltd.
            Nextcoworks JP Nagar - Coworking Space JP Nagar Alankar Plaza, Bk circle, Nayak Layout, 8th Phase, J. P.
            Nagar,
            Bangalore, Karnataka, India 560078
        </div>
    </div>
    <div className='space-y-3'>
        <div className='font-semibold'>
            Links
        </div>
        <div className='text-sm'>
            About us
        </div>
        <div className='text-sm'>
            Press and media
        </div>
        <div className='text-sm'>
           Team
        </div>
        <div className='text-sm'>
            Careers
        </div>
    </div>
    <div className='space-y-3'>
        <div className='font-semibold'>
            Contact
        </div>
        <div className='text-sm'>
            Phone : +91 123 4567 890
        </div>
        <div className='text-sm'>
            Email : contact@giveumma.com
        </div>
    </div>
</div>
)
}

export default Footer