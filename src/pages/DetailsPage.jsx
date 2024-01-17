import { FaDonate, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaIndianRupeeSign, FaXTwitter } from "react-icons/fa6";
import HomeNavbar from "../components/HomeNavbar";
import { Suspense, useCallback, useEffect, useState } from "react";
import Loader from "../components/Loader";
import Button from "../components/Button";
import Supporter from "../components/DetailsPage/Supporter";
import Model from "../components/Model";
import useModel from "../customHooks/useModel";
import DonationForm from "../components/DetailsPage/DonationForm";

const DetailsPage = () => {
  const supporters = [1, 2, 3, 4, 4, 5, 5, 6, 7, 6];

  // supporters controller
  const [visible, toggleModel] = useModel();

  const [donateForm, toggleDonateForm] = useModel();

  return (
    <>
      <HomeNavbar />
      <section className="flex max-lg:flex-wrap gap-8 max-w-5xl mx-auto px-2 mb-16 items-start">
        {/* main */}
        <main className="space-y-4">
          <div className="p-4 bg-gray-200 text-sm">
            GiveUmmah will not charge any fee on your donation to this
            fundraiser.
          </div>
          <div className="text-2xl">
            Urgent: Join the Fight to Save Vishal's Life!
          </div>
          <div className="relative">
            <div className="badge absolute top-5 -left-2 primary py-2 pl-4 pr-6 rounded-lg rounded-tl-none">
              Tax benefits
            </div>
            <Suspense fallback={<Loader />}>
              <img
                src="http://picsum.photos/1080/720.webp"
                className="aspect-video rounded-md"
                alt=""
              />
            </Suspense>
          </div>
          <div className="flex gap-x-4">
            <div className="flex flex-1 gap-x-2 items-center font-[500] text-xl text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-white cursor-pointer transition-colors justify-center py-3 rounded-full">
              <FaWhatsapp size={24} /> Share
            </div>
            <div className="flex flex-1 gap-x-2 items-center text-xl font-[500] text-black hover:text-white border-2 border-black hover:bg-black cursor-pointer transition-colors justify-center py-3 rounded-full">
              <FaXTwitter size={20} /> Share
            </div>
            <div className="flex flex-1 gap-x-2 items-center text-xl font-[500] border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer transition-colors justify-center py-3 rounded-full">
              <FaFacebookF size={20} /> Share
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-1 border p-4 rounded-md gap-4">
              <Suspense fallback={<Loader />}>
                <img
                  className="w-16 h-16 rounded-full"
                  src="http://picsum.photos/50.webp"
                  alt=""
                />
              </Suspense>
              <div className="grid content-center text-gray-500 text-xs">
                Created by
                <span className="text-lg text-zinc-950">Vishal T R</span>
                from, Bengaluru
              </div>
            </div>
            <div className="flex flex-1 border p-4 rounded-md gap-4">
              <Suspense fallback={<Loader />}>
                <img
                  className="w-16 h-16 rounded-full"
                  src="http://picsum.photos/50.webp"
                  alt=""
                />
              </Suspense>
              <div className="grid content-center text-gray-500 text-xs">
                Created by
                <span className="text-lg text-zinc-950">Vishal T R</span>
                from, Bengaluru
              </div>
            </div>
          </div>

          {/* story */}
          <div className="border-b py-2 text-lg font-[500]">Story</div>
          <p className="text-gray-600 text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            sint? Beatae autem nemo suscipit ipsa consectetur deleniti, aliquid
            culpa eos dignissimos dolorem corrupti, eveniet itaque totam ducimus
            aperiam, sed non.
          </p>
          {/* end of story */}

          {/* Supporters */}
          <div className="bg-sky-50 rounded-xl p-4">
            <div className="text-center mb-4 text-xl font-[500]">
              Supporters
            </div>
            {supporters.map((s, i) => {
              if (i > 3) return;
              return <Supporter key={i} />;
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
            <Button type="outline">Report this cause</Button>
          </div>
        </main>

        {/* card */}
        <aside className="max-w-[800px] w-full rounded-lg overflow-hidden sticky top-2 border">
          <div className="primary text-center text-xl text-white py-4">
            GIVE UMMAH
          </div>
          <div className="py-16 grid gap-y-2 place-items-center px-6">
            <div className="text-2xl">$123,000</div>
            <div className="text-gray-500">raised of $20,000</div>
            {/* progress */}
            <div className="bg-gray-300 h-1.5 rounded-full max-w-72 w-full overflow-hidden">
              <div className="primary h-full w-[65%]"></div>
            </div>
            {/* end progress */}
            <div className="flex w-full justify-between items-center max-w-72">
              <div className="flex gap-x-1">
                485 <span className="text-gray-500">Givers</span>
              </div>
              <div className="flex gap-x-1">
                23 <span className="text-gray-500">Day left</span>
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

      <DonationForm controller={[donateForm, toggleDonateForm]} />

      {/* supporters model */}
      <Model
        title={
          <>
            <FaDonate /> 465 Supporters
          </>
        }
        btnText="Donate Now"
        controller={[visible, toggleModel]}
      >
        <div className="px-6">
          {supporters.map((s, i) => {
            return <Supporter key={i} />;
          })}
        </div>
      </Model>
    </>
  );
};

export default DetailsPage;
