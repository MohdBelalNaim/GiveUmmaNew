import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import CampaignCard from "../components/CampaignCard";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import getCampaigns from "../utils/getCampaigns";
import { SpinnerCircular } from "spinners-react";

const AllCampaigns = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14];
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
        <div className="font-bold text-2xl mb-4 flex items-center gap-4">
          <Link to="/">
            <FaArrowLeft />
          </Link>
          <div>Discover All Campaigns</div>
        </div>
        {loading ? (
          <div className="flex justify-center py-10">
            <SpinnerCircular color="dodgerblue" secondaryColor="lightgray" />
          </div>
        ) : (
          <div className="grid grid3 gap-5">
            {campaigns.map((items, index) => (
              <CampaignCard index={index} data={items.data()} id={items.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllCampaigns;
