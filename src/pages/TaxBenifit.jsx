import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import CampaignCard from "../components/CampaignCard";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const TaxBenifit = () => {
  const data = [];
  return (
    <>
      <HomeNavbar />
      <div className="container mx-auto p-5">
        <Link
          to="/"
          className="font-bold max-sm:text-xl text-2xl mb-4 flex items-center gap-4"
        >
          <FaArrowLeft />
          Trending campaigns
        </Link>
        {data.length ? (
          <div className="grid grid3 gap-5">
            {data.map((items, index) => (
              <CampaignCard key={index} index={index} />
            ))}
          </div>
        ) : (
          <h1>Nothing to show!!!</h1>
        )}
      </div>
    </>
  );
};

export default TaxBenifit;
