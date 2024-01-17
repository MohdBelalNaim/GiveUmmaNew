import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import CampaignCard from '../components/CampaignCard'
import { Link } from 'react-router-dom'

const SearchResults = () => {
    const data = [1,2,3,4,5,6,7,8,9,0,11,12,13,14]
  return (
    <>
       <HomeNavbar/>
       <div className='container mx-auto p-5'>
            <div className='font-bold text-2xl mb-4 flex items-center gap-4'>
                <Link to="/"><i className='bi bi-arrow-left'></i></Link>
                <div>Search results for "Children"</div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    data.map((items,index)=><CampaignCard index={index}/>)
                }
            </div>
       </div> 
    </>
  )
}

export default SearchResults