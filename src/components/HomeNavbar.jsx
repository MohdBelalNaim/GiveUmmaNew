import React, { useState } from "react";
import styles from "../assets/css/navbar.module.css";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import AuthModal from "./AuthModal";
import {Toaster} from "react-hot-toast"
import NavMenu from "./NavMenu";

const HomeNavbar = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [authPopup, setAuthPopup] = useState(false);
  
  
  function showSearch() {
    setSearch(true);
    document.body.style.overflow = "hidden";
  }

  function hideSearch() {
    setSearch(false);
    document.body.style.overflow = "unset";
  }
  


  return (
    <>
      <Toaster/>
      {search ? (
        <div
          className={`${styles.searchOverlay} flex items-center justify-center`}
          onClick={(e) => hideSearch(e)}
        >
          <div className="bg-white w-[44%] rounded-xl p-4 shadow-xl">
            <div className="border-[1px] border-gray-300 rounded-lg overflow-hidden">
              <input
                className="w-[85%] shadow-inner px-3 py-2"
                type="text"
                placeholder="Search for"
              />
              <button className="w-[15%] p-2 text-center border-l">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {
      authPopup ? <AuthModal controller={[authPopup,setAuthPopup]}/> : ""}
      <div className={`${styles.navContainer} container mx-auto relative`}>
        {menu ? <NavMenu controller={[authPopup,setAuthPopup]} /> : ""}
        <div className="nav-items max-sm:hidden">
          <Link to="/create-campaign">
            <button className={`${styles.startCampaignButton}`}>
              START A CAMPAIGN
            </button>
          </Link>
        </div>
        <div className="nav-items max-sm:pl-4">
          <div className={styles.logoText}>
            <Link to="/">GiveUmma</Link>
          </div>
        </div>
        <div className="flex gap-4 text-xl">
          <FaSearch onClick={() => setSearch(true)} />
          {menu ? (
            // <i onClick={()=>setMenu(!menu)} className="bi bi-x text-[24px] hover:text-green-400 cursor-pointer"></i>
            <FaTimes onClick={() => setMenu(!menu)} />
          ) : (
            // <i onClick={()=>setMenu(!menu)} className="bi bi-list hover:text-green-400 cursor-pointer"
            //   id={styles.navbarIcons}></i>
            <FaBars onClick={() => setMenu(!menu)} />
          )}
        </div>
      </div>
    </>
  );
};

export default HomeNavbar;
