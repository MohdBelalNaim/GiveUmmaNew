import React, { useState } from 'react'
import styles from '../assets/css/navbar.module.css'
import { Link } from 'react-router-dom'
import { FaSearch, FaTimes, FaUser } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { useAuth0 } from "@auth0/auth0-react";

const HomeNavbar = () => {

  const{user,logout} = useAuth0()

const { loginWithRedirect } = useAuth0();
const[menu,setMenu] = useState(false)
const[search,setSearch] = useState(false)
const[signup,setSignup] = useState(false)
const[auth,setAuth] = useState(false)

function showSearch(){
setSearch(true)
document.body.style.overflow='hidden'
}

function hideSearch(){
setSearch(false)
document.body.style.overflow='unset'
}

function showAuth(){
  setAuth(true)
  document.body.style.overflow='hidden'
}
function hideAuth(){
  setAuth(false)
  document.body.style.overflow='unset'
}

return (
<>
  {
  search?
  <div className={`${styles.searchOverlay} flex items-center justify-center`} onClick={(e)=>hideSearch(e)}>
    <div className='bg-white w-[44%] rounded-xl p-4 shadow-xl'>
      <div className='border-[1px] border-gray-300 rounded-lg overflow-hidden'>
        <input className='w-[85%] shadow-inner px-3 py-2' type="text" placeholder="Search for" />
        <button className='w-[15%] p-2 text-center border-l'><i className="bi bi-search"></i></button>
      </div>
    </div>
  </div>
  :""
  }

  <div className={`${styles.navContainer} container mx-auto relative`}>
    {
    menu?
    <div className='bg-white absolute right-5 top-24 w-80 rounded-xl shadow-lg z-50'>
      <div className='px-3 pt-2'>
        <Link to="/all-campaigns">  
        <div className='flex items-center gap-4 py-2 mt-2'>
          <i className="bi bi-globe text text-gray-400"></i>
          <div className='text-sm'>Discover all</div>
        </div>
        </Link>
        <Link to="/zakat-verified">
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-heart text text-gray-400"></i>
          <div className='text-sm'>Zakat Verified</div>
        </div>
        </Link>
        <Link to="/tax-benifit">
        <div className='flex items-center gap-4 py-2 pb-4'>
          <i className="bi bi-house text text-gray-400"></i>
          <div className='text-sm'>Tax Benifits</div>
        </div>
        </Link>
      </div>
      <Link to="/create-campaign">
      <div className='px-3 py-2 border-t'>
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-send text text-gray-400"></i>
          <div className='text-sm'>Start fundraising</div>
        </div>
      </div>
      </Link>
      <Link to="/how-we-work">
      <div className='px-3 py-2 border-t'>
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-question-circle text text-gray-400"></i>
          <div className='text-sm'>How we work</div>
        </div>
      </div>
      </Link>
      <div className='px-3 py-2 border-t'>
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-person text text-gray-400"></i>
          <div className='text-sm'>About Us</div>
        </div>
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-phone text text-gray-400"></i>
          <div className='text-sm'>Contact Us</div>
        </div>
      </div>
      <div className='px-3 py-2 border-t'>
        {
          user?
        <>
          <Link to="/my-profile">
            <div className='flex items-center gap-4 py-2'>
              <i className="bi bi-shield text text-gray-400"></i>
              <div className='text-sm cursor-pointer' onClick={() => loginWithRedirect()}>My Profile</div>
            </div>
          </Link>
          <div className='flex items-center gap-4 py-2'>
            <i className="bi bi-shield text text-gray-400"></i>
            <div className='text-sm cursor-pointer' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</div>
          </div>
        </>
        :
        <div className='flex items-center gap-4 py-2'>
          <i className="bi bi-shield text text-gray-400"></i>
          <div className='text-sm cursor-pointer' onClick={() => loginWithRedirect()}>Login or Signup</div>
        </div>
        }
      </div>
      
      <div className='px-3 py-2 border-t flex text-xs text-gray-500 gap-4'>
        <div>Privacy Policy</div>
        <div>Terms and Conditions</div>
      </div>
      <div className='px-3 pb-2 text-xs'>
        @GiveUmma 2024
      </div>
    </div>
    :
    ""
    }
    <div className="nav-items max-sm:hidden">
      <Link to="/create-campaign"><button className={`${styles.startCampaignButton}`}>START A CAMPAIGN</button></Link>
    </div>
    <div className="nav-items max-sm:pl-4">
      <div className={styles.logoText}><Link to="/">GiveUmma</Link></div>
    </div>
    <div className="flex gap-4 text-xl">
      <FaSearch  onClick={()=>setSearch(true)} />
      {
      menu?
      // <i onClick={()=>setMenu(!menu)} className="bi bi-x text-[24px] hover:text-green-400 cursor-pointer"></i>
      <FaTimes onClick={()=>setMenu(!menu)}/>
      :
      // <i onClick={()=>setMenu(!menu)} className="bi bi-list hover:text-green-400 cursor-pointer"
      //   id={styles.navbarIcons}></i>
      <FaBars onClick={()=>setMenu(!menu)}/>
      }
    </div>
  </div>
</>
)
}

export default HomeNavbar