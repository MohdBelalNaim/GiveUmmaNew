import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import Button from "../components/Button";
import {FaCheck} from "react-icons/fa";
import MyCampaigns from "../components/MyProfilePage/MyCampaigns";
import Model from "../components/Model";
import useModel from "../customHooks/useModel";

const MyProfile = () => {
  const [form, toggleForm] = useModel();
  const user={}

  const profileOptions = [
    "Verify phone number",
    "Add city location",
    "Verify Email ID",
    "Link Facebook Profile",
    "Link LinkedIn Profile",
    "Add profile pic",
    "Add PAN card number",
    "Add Aadhar card number",
    "Add date of birth",
  ];
  return (
    <>
      <HomeNavbar />
      <div className="container mx-auto max-sm:px-0 pb-16">

        <div className="flex gap-6 font-semibold text-sm w-[40%] mx-auto text-center">
          <div className="flex-1 py-3  border-b border-primary">PROFILE</div>
          <div className="flex-1 py-3">FUNDRAISERS</div>
        </div>

        <section>
          <div className="text-xl font-bold">Your Profile</div>

          <div className="flex gap-8  max-sm:flex-col items-start py-5">
            <div className="p-5 flex-1 shadow-lg border rounded-lg relative">
              <div className="flex justify-end absolute right-6">
                <Button onClick={toggleForm} size="md" type="outline">
                  Edit
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-x-28 gap-y-5 p-5">
                <div>
                  <img
                    src={user?.picture}
                    className="h-24 w-24 object-contain rounded-full"
                    alt=""
                  />
                </div>
                <div className="place-self-end justify-self-start">
                  <div className="text-gray-500">Name</div>
                  <div className="text-lg font-light">{user?.name}</div>
                </div>
                <div>
                  <div className="text-gray-500">Email</div>
                  <div className="text-lg font-light">
                    {user?.email}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Date of Birth</div>
                  <div className="text-lg font-light">{user?.birthdate??"DD-MM-YYYY"}</div>
                </div>
                <div>
                  <div className="text-gray-500">Phone Number</div>
                  <div className="text-lg font-light">{user?.phone_number??"XXXXXXXXXX"}</div>
                </div>
                <div>
                  <div className="text-gray-500">City of Residence</div>
                  <div className="text-lg font-light">Lucknow, India</div>
                </div>
                <div>
                  <div className="text-gray-500">PAN Number</div>
                  <div className="text-lg font-light">BTLPA4717M</div>
                </div>
                <div>
                  <div className="text-gray-500">Aadhar Number</div>
                  <div className="text-lg font-light">*******260</div>
                </div>
              </div>
            </div>
            <div className="shadow-lg border rounded-lg">
              <div className="px-8 py-4 font-semibold border-b border-gray-300 text-sm">
                YOUR PROFILE STRENGTH : STRONG
              </div>
              {profileOptions.map((item, index) => {
                return (
                  <div
                    className={`flex items ${
                      index != profileOptions.length - 1 && "border-b"
                    } border-gray-300`}
                  >
                    <div className="w-[86%] py-3 px-4 text-sm">{item}</div>
                    <div className="w-[14%] border-l border-gray-300 flex items-center justify-center">
                      <div className="bg-green-500 text-xs text-white h-5 w-5 flex items-center justify-center rounded-full">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="text-xl font-bold mb-4">Your Fundraisers</div>
          <MyCampaigns />
          <MyCampaigns />
        </section>
      </div>
      <Model title="Update details" controller={[form, toggleForm]}>
        <form>
            <input type="tel" placeholder="Phone number"/>
        </form>
      </Model>
    </>
  );
};

export default MyProfile;
