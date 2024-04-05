import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import CareerCard from "../components/CareerCard";
import {
  BsBoxArrowUpRight,
  BsClock,
  BsHouse,
  BsListCheck,
  BsX,
} from "react-icons/bs";

const Careers = () => {
  const [apply, setApply] = useState(false);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      {apply && (
        <div className="inset-0 glass fixed z-50 grid place-items-center">
          <div className="w-[min(440px,96%)] bg-white rounded-md">
            <div className="text-lg flex p-3 border-b">
              <BsX
                size={28}
                onClick={() => setApply(false)}
                className="cursor-pointer"
              />
              Apply for this job
            </div>
            <div className="p-3 grid gap-y-3">
              <input
                type="text"
                className="w-full p-2 border-b"
                placeholder="Full name"
              />
              <input
                type="text"
                className="w-full p-2 border-b"
                placeholder="Email address"
              />
              <input
                type="text"
                className="w-full p-2 border-b"
                placeholder="Phone number"
              />
              <input type="file" className="w-full p-2 border-b" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="w-full p-2 border-b"
                placeholder="Your message to recruiter"
              ></textarea>
              <button className="w-full bg-black text-white text-center rounded py-2">
                Apply{" "}
              </button>
            </div>
          </div>
        </div>
      )}
      <HomeNavbar />
      <div className="container mx-auto w-[min(1100px,96%)] py-8">
        <div className="grid grid-cols-2 shadow-md rounded border">
          <div className="border-r h-[90dvh] overflow-scroll">
            {"abcdefghijk".split("").map((item, index) => {
              return <CareerCard />;
            })}
          </div>

          <div className="p-4 h-[90dvh] overflow-scroll">
            <div className="text-2xl font-bold">
              Software Developer - Fresher
            </div>
            <div className="text-gray-500 text-sm mt-2">
              1 Week ago • 99 Applicants
            </div>
            <div className="text-sm grid gap-y-2 mt-4">
              <div className="flex gap-2 items-center">
                <BsClock /> Full time
              </div>
              <div className="flex gap-2 items-center">
                <BsHouse /> Remote
              </div>
              <div className="flex gap-2 items-center">
                <BsListCheck /> 5 required skills
              </div>
            </div>

            <button
              onClick={() => setApply(true)}
              className="bg-black flex items-center gap-2 text-[14px] mt-4 text-white px-4 py-2 rounded-full"
            >
              <BsBoxArrowUpRight /> Apply{" "}
            </button>

            <div className="font-bold mt-6">About the job</div>
            <div className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fugiat corrupti optio. Reiciendis, in quo cupiditate excepturi
              dolorum numquam magnam earum architecto minima, voluptatibus eum
              laborum vitae ullam quasi? Asperiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aliquam fugiat corrupti optio.
              Reiciendis, in quo cupiditate excepturi dolorum numquam magnam
              earum architecto minima, voluptatibus eum laborum vitae ullam
              quasi? Asperiores. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam fugiat corrupti optio. Reiciendis, in
              quo cupiditate excepturi dolorum numquam magnam earum architecto
              minima, voluptatibus eum laborum vitae ullam quasi? Asperiores.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              fugiat corrupti optio. Reiciendis, in quo cupiditate excepturi
              dolorum numquam magnam earum architecto minima, voluptatibus eum
              laborum vitae ullam quasi? Asperiores.
            </div>
            <div className="font-bold mt-6">Required Skills</div>
            <ul>
              <li>React JS</li>
              <li>Node JS</li>
              <li>Express JS</li>
              <li>MongoDB</li>
              <li>MariaDB</li>
              <li>Hash tables</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
