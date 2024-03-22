import React, { useState } from "react";
import styles from "../assets/css/navbar.module.css";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";
import NavMenu from "./NavMenu";
import { BiSearch } from "react-icons/bi";
import logo from "../assets/images/logo.png"
const HomeNavbar = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [authPopup, setAuthPopup] = useState(false);

  return (
    <>
      <Toaster />

      <section className="border-b">
        <div
          className={`${styles.navContainer} max-sm:py-4 container mx-auto relative  lg:px-8`}
        >
          {menu ? <NavMenu controller={[authPopup, setAuthPopup]} /> : ""}
          <div className="nav-items max-sm:hidden">
            <Link to="/create-campaign">
              <button className={`${styles.startCampaignButton}`}>
                START A CAMPAIGN
              </button>
            </Link>
          </div>
          <div className="nav-items max-sm:pl-4">
            <div className={styles.logoText}>
              <Link to="/">
                <img src={logo} alt="" className="w-52 max-sm:w-32" />
              </Link>
            </div>
          </div>
          <div className="flex gap-6 items-center text-xl max-sm:mr-4">
            <div className="flex items-center border border-gray-300 rounded-full px-2 w-[300px] max-sm:hidden">
              <input
                type="text"
                placeholder="Search here"
                className="text-sm outline-none w-full px-2"
              />
              <button className="hover:bg-black hover:text-white rounded-full p-1.5">
                <BiSearch size={22} />
              </button>
            </div>

            <div className="cursor-pointer" onClick={() => setMenu(!menu)}>
              {menu ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeNavbar;
