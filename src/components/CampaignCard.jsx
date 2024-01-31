import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { database } from "../utils/firebaseConfig";

const CampaignCard = ({ index, data, id }) => {

  const [totalAmount, setTotalAmount] = useState(0);
  const [details, setDetails] = useState([]);
  async function getDetails() {
    const q = query(
      collection(database, "donations"),
      where("campaignId", "==", id)
    );
    const details = await getDocs(q);
    setDetails(details.docs);
    setTotalAmount(details.docs.reduce((c, n) => +c + +n.data().amount, 0));
  }
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <Link to={`/details/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform">
        <img
          src={data.campaignImage[0]}
          className="h-[260px] object-cover w-full"
          alt=""
        />
        <div className="p-4 space-y-3">
          <div className="">
            {data.campaignTitle.length > 30
              ? data.campaignTitle.substring(0, 30) + "..."
              : data.campaignTitle}
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <div className="text-sm">
                {details.length} <span className="text-gray-500">Givers</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="bi bi-clock text-[18px] text-gray-400"></i>
              <div className="text-sm">140 <span className="text-gray-500">days left</span></div>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-1 overflow-hidden">
            <div
              className="h-1 primary"
              style={{ width: (totalAmount / data.goalAmount) * 100 + "%" }}
            ></div>
          </div>
          <div className="flex items-center">
            <div>
              <div className="font-semibold text-xl">₹ {totalAmount}</div>
              <div className="text-sm text-gray-500">
                funded of ₹ {data.goalAmount}
              </div>
            </div>
            <button className="primary text-white py-2 px-4 text-sm font-semibold rounded-full ml-auto">
              SUPPORT
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
