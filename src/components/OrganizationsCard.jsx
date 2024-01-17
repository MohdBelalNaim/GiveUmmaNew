import React from 'react'

const OrganizationsCard = ({index}) => {
return (
<div className='shadow-md rounded-xl grid gap-4 place-items-center place-content-center py-10 border'>
    <img src={`https://picsum.photos/400?${index}`} className='h-32 w-32 object-contain rounded-full' />
    <p>Islamic help</p>
    <button className='primary text-white font-semibold text-sm px-8 py-2 rounded-full'>
        DONATE NOW
    </button>
</div>
)
}

export default OrganizationsCard