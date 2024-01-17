import React from 'react'
import { FaCalendar, FaCheck, FaEnvelope, FaEye, FaFacebook, FaFacebookF, FaHandHoldingHeart, FaLink, FaWhatsapp } from 'react-icons/fa'
import Button from '../Button'

const MyCampaigns = () => {
return (
<div className='shadow-lg border border-gray-100 rounded-xl p-6 mb-4'>
    <div className='grid grid-cols-2 gap-14 '>
        <div>
            <div className='flex gap-4   mb-10'>
                <img src="http://picsum.photos/120" alt="" />
                <div>
                    <div>Help a farmer to feed and educate his 7 little girls</div>
                    <div className='text-xs bg-green-500 w-max text-white py-1 px-5 rounded-full mt-5'>Active</div>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='flex items-center gap-4'>
                    <div
                        className='bg-blue-200 h-10 w-10 flex items-center text-primary text-2xl rounded-full justify-center'>
                        <FaHandHoldingHeart />
                    </div>
                    <div className='flex-col'>
                        <div className='font-semibold'>
                            $0
                        </div>
                        <div className='text-gray-500 text-sm'>
                            Fund raised
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div
                        className='bg-blue-200 h-10 w-10 flex items-center text-primary text-2xl rounded-full justify-center'>
                        <FaCalendar />
                    </div>
                    <div className='flex-col'>
                        <div className='font-semibold'>
                            10
                        </div>
                        <div className='text-gray-500 text-sm'>
                            Days left
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div
                        className='bg-blue-200 h-10 w-10 flex items-center text-primary text-2xl rounded-full justify-center'>
                        <FaEye />
                    </div>
                    <div className='flex-col'>
                        <div className='font-semibold'>
                            $100
                        </div>
                        <div className='text-gray-500 text-sm'>
                            Views
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className='space-y-3'>
            <div className='flex gap-7 '>
                <Button width="full" type="outline" size="md">PEROFRMANCE</Button>
                <Button width="full" type="outline" size="md">EDIT</Button>
            </div>
            <Button size="md" width="full" type="primary">UPLOAD DOCUMENTS</Button>
            <div className='font-light text-center border-t pt-4'><span className='font-normal'>Keep sharing</span> to
                increase your fundraiser search</div>
            <div className="flex justify-evenly py-3">
                <div
                    className='bg-blue-800 shadow-lg text-white text-xl h-12 w-12 rounded-full flex items-center justify-center'>
                    <FaFacebookF />
                </div>
                <div
                    className='bg-green-500 shadow-lg text-white text-xl h-12 w-12 rounded-full flex items-center justify-center'>
                    <FaWhatsapp />
                </div>
                <div
                    className='bg-red-500 shadow-lg text-white text-xl h-12 w-12 rounded-full flex items-center justify-center'>
                    <FaEnvelope />
                </div>
                <div
                    className='bg-yellow-300 shadow-lg text-white text-xl h-12 w-12 rounded-full flex items-center justify-center'>
                    <FaLink />
                </div>
            </div>
        </div>
    </div>
    <div className='flex justify-center border-t mt-4 pt-4'>
        <Button type="outline" size="md">WITHDRAW FUNDS</Button>
    </div>
</div>
)
}

export default MyCampaigns