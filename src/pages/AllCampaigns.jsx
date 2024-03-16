import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import CampaignCard from "../components/CampaignCard";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import getCampaigns from "../utils/getCampaigns";
import { SpinnerCircular } from "spinners-react";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCampaigns("Active").then((data) => {
      setCampaigns(data.docs);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <HomeNavbar />
      <div className="container mx-auto p-5">
        <Link
          to="/"
          className="font-bold max-sm:text-xl text-2xl mb-4 flex items-center gap-4"
        >
          <FaArrowLeft />
          Discover All Campaigns
        </Link>
        {loading ? (
          <div className="flex justify-center py-10">
            <SpinnerCircular color="dodgerblue" secondaryColor="lightgray" />
          </div>
        ) : campaigns.length ? (
          <div className="grid grid3 gap-5">
            {campaigns.map((items, index) => (
              <CampaignCard
                index={index}
                data={items.data()}
                key={index}
                id={items.id}
              />
            ))}
          </div>
        ) : (
          <h1>Nothing to show!!</h1>
        )}
      </div>
    </>
  );
};

export default AllCampaigns;
