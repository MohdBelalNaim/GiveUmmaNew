import {
  FaDonate,
  FaFacebookF,
  FaLink,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { FaEarthAsia, FaXTwitter } from "react-icons/fa6";
import HomeNavbar from "../components/HomeNavbar";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Button from "../components/Button";
import Supporter from "../components/DetailsPage/Supporter";
import Model from "../components/Model";
import useModel from "../customHooks/useModel";
import DonationForm from "../components/DetailsPage/DonationForm";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { database } from "../utils/firebaseConfig";
import ReactMarkdown from "react-markdown";
import Style from "../components/CreateCampaignPage/StoryAndPhotos.module.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { formatINR } from "../utils/tools";
import ReportForm from "../components/DetailsPage/ReportForm";
import { Toaster } from "react-hot-toast";
import { getDateDifferenceInDays } from "../utils/dateDifference";
import { CiGlobe } from "react-icons/ci";
import { BiCalendar, BiGroup } from "react-icons/bi";
import { BsCalendar, BsPeople, BsPeopleFill } from "react-icons/bs";

const DetailsPage = () => {
  // supporters controller
  const [visible, toggleModel] = useModel();

  const [report, setReport] = useState(false);
  const [donateForm, toggleDonateForm] = useModel();
  const [campaignData, setCampaignData] = useState({});
  const [donations, setDonations] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const date = new Date();
  const tweetRef = useRef(null);
  const facebookRef = useRef(null);

  useEffect(() => {
    const url = window.location.href;
    const title = document.title;
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const tweetLink = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

    tweetRef.current.href = tweetLink;
    facebookRef.current.href = facebookLink;

    async function getData() {
      const campaignRef = collection(database, "campaigns");
      const data = await getDoc(doc(campaignRef, id));
      setCampaignData(data.data());
      const currentView = data.data().views;
      await updateDoc(doc(database, "campaigns", id), {
        views: +currentView + 1,
      });
      setLoading(false);
    }
    getData();
  }, []);

  const getDonations = useCallback(async () => {
    let q = query(
      collection(database, "donations"),
      where("campaignId", "==", id)
    );
    let data = await getDocs(q);
    setDonations(data.docs);
    setTotalAmount(data.docs.reduce((c, n) => +c + +n.data().amount, 0));
  }, [donations]);

  useEffect(() => {
    getDonations();
    console.log(campaignData);
  }, []);

  return (
    <>
      <div className="primary shadow-lg fixed w-full bottom-0 border-t py-2 shadow hidden max-sm:block">
        <button
          className="primary w-full rounded-md py-2 text-lg"
          onClick={toggleDonateForm}
        >
          Donate Now
        </button>
      </div>
      <Toaster />
      {loading && <Loader />}
      <HomeNavbar />
      <section className="flex max-lg:flex-wrap gap-8 max-w-5xl mx-auto px-2 mb-16 items-start mt-2">
        {/* main */}
        <main className="space-y-4 max-w-2xl">
          <div className="p-4 bg-gray-200 text-sm">
            GiveUmma will not charge any fee on your donation to this
            fundraiser.
          </div>
          <div className="text-2xl">{campaignData.campaignTitle}</div>
          <div className="relative">
            <div className="badge absolute top-5 -left-2 primary py-4 pl-4 pr-6 rounded-lg rounded-tl-none">
              Tax benefits
            </div>
            <Suspense fallback={<Loader />}>
              <img
                src={campaignData?.campaignImage}
                className="aspect-video rounded-md object-cover"
                alt=""
              />
            </Suspense>
          </div>
          <div className="border rounded-md p-6 gap-y-2 hidden max-sm:grid">
            <div className="text-2xl font-bold">{formatINR(totalAmount)}</div>
            <div className="text-gray-500 text-sm">
              raised of {formatINR(campaignData?.goalAmount)}
            </div>
            <div className="w-full rounded-full h-3 mt-4 bg-gray-100 overflow-hidden">
              <div
                className="w-full rounded-full h-3 primary"
                style={{
                  width: (totalAmount / campaignData.goalAmount) * 100 + "%",
                }}
              ></div>
            </div>
            <div className="mt-3 flex items-center  gap-x-10">
              <div className="flex gap-1 text-sm font-bold items-center">
                <BsCalendar />
                <div>{getDateDifferenceInDays(campaignData.date)}</div>
                <div className="text-gray-500">Days left</div>
              </div>
              <div className="flex gap-1 text-sm font-bold items-center">
                <BsPeople />
                <div>{donations.length}</div>
                <div className="text-gray-500">Givers</div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 items-start">
            <div className="flex flex-1 gap-x-2 items-center font-[500] text-xl text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-white cursor-pointer transition-colors justify-center py-3 rounded-full max-sm:text-sm max-sm:py-1.5">
              <a href={`whatsapp://send?text=${window.location.href}`}>
                <FaWhatsapp size={24} />
              </a>
            </div>
            <div className="flex flex-1 gap-x-2 items-center text-xl font-[500] text-black hover:text-white border-2 border-black hover:bg-black cursor-pointer transition-colors justify-center py-3 rounded-full max-sm:text-sm max-sm:py-2">
              <a ref={tweetRef} target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={20} />
              </a>
            </div>
            <div className="flex flex-1 gap-x-2 items-center text-xl font-[500] border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer transition-colors justify-center py-3 rounded-full max-sm:text-sm max-sm:py-2">
              <a ref={facebookRef} target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={20} />
              </a>
            </div>
            <div className="flex flex-1 gap-x-2 items-center text-xl font-[500] border-2 border-black text-black hover:bg-black hover:text-white cursor-pointer transition-colors justify-center py-3 rounded-full max-sm:text-sm max-sm:py-2">
              <FaLink size={20} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
            <div className="flex items-center border p-4 rounded-md gap-4">
              {/* <Avatar size="sm" name={campaignData?.campaignerName} /> */}
              <div className="grid content-center text-gray-500 text-xs">
                Campaigner
                <span className="text-lg text-zinc-950 max-sm:text-sm">
                  {campaignData?.campaignerName}
                </span>
                from, India
              </div>
            </div>
            <div className="flex items-center border p-4 rounded-md gap-4">
              {/* <Avatar size="sm" name={campaignData?.benificiaryName} /> */}
              <div className="grid content-center text-gray-500 text-xs">
                Benificiary
                <span className="text-lg text-zinc-950 max-sm:text-sm">
                  {campaignData?.benificiaryName}
                </span>
                from, India
              </div>
            </div>
          </div>

          {/* story */}
          <div className="border-b py-2 text-lg font-[500] flex items-center gap-2">
            <CiGlobe />
            Story
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            className={`${Style.head} ${Style.newLine}`}
            children={campaignData.story}
          />
          {/* end of story */}

          {/* Supporters */}
          <div className="bg-sky-50 rounded-xl p-4">
            <div className="text-center mb-4 text-xl font-[500]">
              Supporters
            </div>
            {donations.map((donation, i) => {
              if (i > 3) return;
              return <Supporter data={donation.data()} key={i} />;
            })}
            <div
              className="flex justify-center mt-6 mb-4"
              onClick={toggleModel}
            >
              <Button type="text">View all supporters</Button>
            </div>
          </div>

          <div className="p-8 border rounded-md grid gap-4 place-items-center text-center text-sm">
            If something isn't right, we will work with you to ensure no misuse
            occurs.
            <Button type="outline" onClick={() => setReport(true)}>
              Report this cause
            </Button>
          </div>
        </main>

        {/* card */}
        <aside className="max-w-sm w-full rounded-lg overflow-hidden sticky top-2 border max-sm:hidden">
          <div className="primary text-center text-xl text-white py-4">
            GIVE UMMAH
          </div>
          <div className="py-16 grid gap-y-2 place-items-center px-6">
            <div className="text-2xl">{formatINR(totalAmount)}</div>
            <div className="text-gray-500">
              raised of {formatINR(campaignData.goalAmount)}
            </div>
            {/* progress */}
            <div className="bg-gray-300 h-1.5 rounded-full max-w-72 w-full overflow-hidden">
              <div
                className="primary h-full"
                style={{
                  width: (totalAmount / campaignData.goalAmount) * 100 + "%",
                }}
              ></div>
            </div>
            {/* end progress */}
            <div className="flex w-full justify-between items-center max-w-72 mt-2">
              <div className="flex gap-x-1 items-center text-sm">
                <BiGroup className="text-gray-500" size={20} />{" "}
                <span className="font-bold">{donations.length}</span>{" "}
                <span className="text-gray-500">Givers</span>
              </div>
              <div className="flex gap-x-1  text-sm items-center">
                <BiCalendar className="text-gray-500" size={18} />
                <span className="font-bold">
                  {getDateDifferenceInDays(campaignData.date)}
                </span>{" "}
                <span className="text-gray-500">Day left</span>
              </div>
            </div>

            {/* donate button */}
            <div className="w-full max-w-72 mt-16">
              <Button width="full" onClick={toggleDonateForm}>
                Donate Now
              </Button>
            </div>

            <div className="text-gray-500 grid place-items-center mt-16">
              <span className="text-xl">Zakat verified</span>
              This campaign is Zakat Verfied
            </div>
          </div>
        </aside>
      </section>

      {/* Donation Form */}

      <DonationForm
        updateDonations={getDonations}
        campaignID={id}
        currRaised={campaignData.raisedAmount}
        currTip={campaignData.totalTip}
        controller={[donateForm, toggleDonateForm]}
      />

      {/* supporters model */}
      <Model
        title={
          <>
            <BsPeopleFill /> {donations.length} Supporters
          </>
        }
        btnText="Donate Now"
        btnOnClick={() => {
          toggleModel();
          toggleDonateForm();
        }}
        controller={[visible, toggleModel]}
      >
        <div className="px-6">
          {donations.map((donation, i) => {
            return <Supporter data={donation.data()} key={i} />;
          })}
        </div>
      </Model>
      {report && <ReportForm controller={[report, setReport]} campaign={id} />}
    </>
  );
};

export default DetailsPage;
