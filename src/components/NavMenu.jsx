import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { signOut } from "firebase/auth";

const NavMenu = () => {
  const navigate = useNavigate();
  function logOut() {
    signOut(auth).then(() => {
      localStorage.clear();
      navigate("/");
    });
  }
  return (
    <div className="bg-white absolute right-5 max-sm:right-0 top-24 max-sm:top-16 w-80 sm:rounded-xl shadow-lg z-50">
      <div className="px-3 pt-2">
        <Link to="/all-campaigns">
          <div className="flex items-center gap-4 py-2 mt-2">
            <i className="bi bi-globe text text-gray-400"></i>
            <div className="text-sm">Discover all</div>
          </div>
        </Link>
        <Link to="/zakat-verified">
          <div className="flex items-center gap-4 py-2">
            <i className="bi bi-heart text text-gray-400"></i>
            <div className="text-sm">Zakat Verified</div>
          </div>
        </Link>
        <Link to="/tax-benifit">
          <div className="flex items-center gap-4 py-2 pb-4">
            <i className="bi bi-house text text-gray-400"></i>
            <div className="text-sm">Trending campaigns</div>
          </div>
        </Link>
      </div>
      <Link to="/create-campaign">
        <div className="px-3 py-2 border-t">
          <div className="flex items-center gap-4 py-2">
            <i className="bi bi-send text text-gray-400"></i>
            <div className="text-sm">Start fundraising</div>
          </div>
        </div>
      </Link>
      <Link to="/how-we-work">
        <div className="px-3 py-2 border-t">
          <div className="flex items-center gap-4 py-2">
            <i className="bi bi-question-circle text text-gray-400"></i>
            <div className="text-sm">How we work</div>
          </div>
        </div>
      </Link>
      <div className="px-3 py-2 border-t">
        <div className="flex items-center gap-4 py-2">
          <i className="bi bi-person text text-gray-400"></i>
          <div className="text-sm">About Us</div>
        </div>
        <div className="flex items-center gap-4 py-2">
          <i className="bi bi-phone text text-gray-400"></i>
          <div className="text-sm">Contact Us</div>
        </div>
      </div>
      <div className="px-3 py-2 border-t">
        {localStorage.getItem("user") ? (
          <>
            <Link to="/my-profile">
              <div className="flex items-center gap-4 py-2">
                <i className="bi bi-shield text text-gray-400"></i>
                <div className="text-sm cursor-pointer">My Profile</div>
              </div>
            </Link>
            <div className="flex items-center gap-4 py-2" onClick={logOut}>
              <i className="bi bi-shield text text-gray-400"></i>
              <div className="text-sm cursor-pointer">Logout</div>
            </div>
          </>
        ) : (
          <Link to="/auth" className="flex items-center gap-4 py-2">
            <i className="bi bi-shield text text-gray-400"></i>
            <div className="text-sm cursor-pointer">Login or Signup</div>
          </Link>
        )}
      </div>

      <div className="px-3 py-2 border-t flex text-xs text-gray-500 gap-4">
        <div>Privacy Policy</div>
        <div>Terms and Conditions</div>
      </div>
      <div className="px-3 pb-2 text-xs">@GiveUmma 2024</div>
    </div>
  );
};

export default NavMenu;
