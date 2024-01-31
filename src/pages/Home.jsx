import React, { useEffect, useState } from "react";
import styles from "../assets/css/home.module.css";
import HomeNavbar from "../components/HomeNavbar";
import CampaignCard from "../components/CampaignCard";
import OrganizationsCard from "../components/OrganizationsCard";
import { Link } from "react-router-dom";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { database } from "../utils/firebaseConfig";
import { SpinnerCircular } from "spinners-react";

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
      <section className={styles.banner}>
        <HomeNavbar />
        <div
          className={`container mx-auto max-lg:px-4 pb-20 max-sm:px-[24px] max-sm:pb-8 lg:px-8`}
        >
          <div className="font-bold text-[60px] max-w-[600px] max-sm:text-[40px]">
            Empower lives with your giving
          </div>
          <div className="flex gap-4 mt-4 max-sm:flex-col max-sm:items-start">
            <button className={styles.heroButtons}>Donate to Palestine</button>
            <button className={styles.heroButtons}>
              Help individuals in need
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto lg:px-8">
        <section className="py-8 max-lg:px-4 max-sm:px-[12px]">
          <div
            className={`${styles.fundraisingTitle} text-sm md:text-[32px] mb-3 font-[700]`}
          >
            Fundraising now
          </div>
          <div className={`${styles.fundraisingSubTitle} mb-4`}>Sponsored</div>

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
          <div
            className={`${styles.fundraisingTitle} text-sm md:text-[32px] mb-3 font-[700]`}
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
        </section>
      </section>
    </>
  );
};

export default Home;
