import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import CampaignCard from "../components/CampaignCard";
import { Link } from "react-router-dom";
import {} from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";

const ZakatVerified = () => {
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
          Zakat verified Campaigns
        </Link>
        <div className="grid grid3 gap-5">
          {data?.length ? (
            data.map((items, index) => (
              <CampaignCard key={index} index={index} />
            ))
          ) : (
            <h1>No campaigns to show!!</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default ZakatVerified;
