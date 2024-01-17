import React from "react";
import HomeNavBar from "../components/HomeNavbar";
import { steps } from "../workstepsdata";
import { data } from "../donatestepsdata";
import StepComponent from "../components/StepComponent";

const HowWeWork = () => {
  return (
    <>
      <HomeNavBar />
      <div className="container mx-auto">
        <div className="max-sm:p-4 lg:py-16">
          <div className="text-3xl font-bold">How we work</div>
          <div className="max-w-2xl text-gray-500 py-3 mb-5">
            At GiveUmma, our fundraising process is designed to be transparent,
            efficient, and focused on achieving meaningful impact. Here's a
            step-by-step guide to how we work:
          </div>
          <div>
            {steps.map((item, index) => {
              return (
                <StepComponent
                  index={index + 1}
                  title={item.heading}
                  desc={item.Description}
                  last={steps.length - 1 === index}
                />
              );
            })}
          </div>
          <div className="max-w-2xl text-gray-500 py-3 mb-5">
            By following this structured and accountable process, GiveUmma
            ensures that every donation has a purpose and contributes to the
            betterment of society, aligning with our mission of facilitating
            impactful and transparent fundraising within the Islamic community.
          </div>
        </div>

        <div className="max-sm:p-4">
          <div className="text-3xl font-bold">How to donate on GiveUmma</div>
          <div className="max-w-2xl text-gray-500 py-3 mb-5">
            Donating on GiveUmma is a straightforward and secure process,
            designed to make contributing to meaningful causes easy and
            accessible. Here's a step-by-step guide on how the donation process
            works:
          </div>
          <div>
            {data.map((item, index) => {
              return (
                <StepComponent
                  index={index + 1}
                  title={item.heading}
                  desc={item.Description}
                  last={steps.length === index}
                />
              );
            })}
          </div>
          <div className="max-w-2xl text-gray-500 py-3 mb-5">
            By following these steps, GiveUmma ensures that the donation process
            is user-friendly, secure, and transparent. It empowers individuals
            to contribute to causes they believe in, making a positive impact on
            the lives of those in need.
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
