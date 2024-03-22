import React, { useEffect, useState } from "react";
import styles from "../assets/css/home.module.css";
import HomeNavbar from "../components/HomeNavbar";
import CampaignCard from "../components/CampaignCard";
import OrganizationsCard from "../components/OrganizationsCard";
import { Link } from "react-router-dom";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { database } from "../utils/firebaseConfig";
import { SpinnerCircular } from "spinners-react";
import startImage from "../assets/images/start.png"
import shareImage from "../assets/images/sharing.png"
import withdrawImage from "../assets/images/withdraw.png"

const Home = () => {
  let orgData = [1, 2, 3];
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  async function getCampaigns() {
    setLoading(true);
    const campaignsRef = collection(database, "campaigns");
    const q = query(campaignsRef, where("status", "==", "Active"), limit(6));
    const data = await getDocs(q);
    setCampaigns(data.docs);
    setLoading(false);
  }

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <>
      <HomeNavbar />

      <section className="min-h-[380px] grid">
        <div className="w-full relative text-white grid items-center ">
          <div className="container mx-auto grid content-center justify-items-start max-lg:p-4">
            <div className="text-5xl max-sm:text-3xl font-[700] mb-4">
              Save A Child Every Month
            </div>
            <div className="text-2xl max-sm:text-lg max-w-2xl mb-8">
              Join <b>421,908</b> monthly donors with Social Impact Plan and
              start saving needy children every month
            </div>
            <button className="capitalize bg-white text-black px-5 py-3 rounded font-[700] max-sm:text-sm max-sm:py-2 max-sm:px-3">
              Start giving monthly
            </button>
          </div>
          <img
            src="https://t4.ftcdn.net/jpg/02/61/52/73/360_F_261527303_0NhigPCosnRCAFzKrDzHglrH9joXgC7W.jpg"
            className="object-cover w-full h-[380px] absolute inset-0 -z-10 -scale-x-100"
          />
        </div>
      </section>

      <section className="container mx-auto lg:px-8 sm:mt-8">
        <section className="py-8 max-sm:py-4 max-lg:px-4 max-sm:px-[12px]">
          <div
            className={`${styles.fundraisingTitle} text-xl md:text-[32px] font-[700] mb-8 max-sm:mb-4`}
          >
            Trending campaigns
          </div>

          {loading ? (
            <div className="py-10 flex justify-center">
              <SpinnerCircular color="dodgerblue" secondaryColor="lightgray" />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6">
                {campaigns.map((item, index) => (
                  <CampaignCard
                    data={item.data()}
                    id={item.id}
                    key={index}
                    index={index}
                  />
                ))}
              </div>

              <div className="mt-6">
                <Link to="/all-campaigns">
                  <button className="primary font-semibold text-sm px-8 py-2 rounded-full">
                    DISCOVER ALL
                  </button>
                </Link>
              </div>
            </>
          )}
        </section>

        <section className="container mx-auto py-8 max-lg:px-4 max-sm:px-[12px]">
          <div className="text-center text-2xl font-bold">
            Start a fundraiser in three simple steps
          </div>
          <div className="mt-12">
            <div className="flex gap-12 text-center max-sm:flex-col">
              <div className="">
                <div className="grid place-items-center mb-4">
                  <img src={startImage} alt="" />
                </div>
                <div className="font-bold text-primary text-xl">
                  Start your fundraiser
                </div>
                <div className="px-16">
                  It’ll take only 2 minutes. Just tell us a few details about
                  you and the ones you are raising funds for.
                </div>
              </div>
              <div>
                <div className="grid place-items-center mb-4">
                  <img src={shareImage} alt="" />
                </div>
                <div className="font-bold text-primary text-xl">
                  Share your fundraiser
                </div>
                <div className="px-16">
                  All you need to do is share the fundraiser with your friends
                  and family. In no time, support will start pouring in.
                </div>
              </div>
              <div>
                <div className="grid place-items-center mb-4">
                  <img src={withdrawImage} alt="" />
                </div>
                <div className="font-bold text-primary text-xl">
                  Withdraw Funds
                </div>
                <div className="px-16">
                  The funds raised can be withdrawn without any hassle directly
                  to your bank account.
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="container mx-auto py-8 max-lg:px-4 max-sm:px-[12px]">
          <div
            className={`${styles.fundraisingTitle} text-xl md:text-[32px] mb-3 font-[700]`}
          >
            Organizations
          </div>
          <div className={`${styles.fundraisingSubTitle} mb-4`}>
            Support your favorite organizations
          </div>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6 mt-4">
            {orgData.map((items, index) => (
              <OrganizationsCard key={index} index={index} />
            ))}
          </div>
        </section> */}
      </section>
    </>
  );
};

export default Home;
