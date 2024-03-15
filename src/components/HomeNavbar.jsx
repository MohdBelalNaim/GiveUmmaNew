import React, { useState } from "react";
import styles from "../assets/css/navbar.module.css";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";
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
      <Toaster />
      {search && (
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
      )}

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
              <Link to="/">GiveUmma</Link>
            </div>
          </div>
          <div className="flex gap-4 text-xl max-sm:mr-4">
            <div className="cursor-pointer" onClick={() => setSearch(true)}>
              <FaSearch />
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
