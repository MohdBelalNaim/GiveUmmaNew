import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import Button from "../components/Button";
import { FaCheck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import MyCampaigns from "../components/MyProfilePage/MyCampaigns";
import Model from "../components/Model";
import useModel from "../customHooks/useModel";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../utils/firebaseConfig";
import Loader from "../components/Loader";
import Avatar from "../components/Avatar";

const MyProfile = () => {
  const [form, toggleForm] = useModel();
  const uid = localStorage.getItem("user");
  let [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      let data = await getDoc(doc(database, "users", uid));
      setUserData(data.data());
    }
    getData().then((loaded) => setIsLoading(false));
  }, []);

  const name = userData?.name;
  const email = userData?.email;
  const phone = userData?.phone;
  const pan = userData?.pan;
  const aadhar = userData?.aadhar;
  const city = userData?.city;
  const dob = userData?.dob;
  const photo = userData?.photo;
  const linkedin = userData?.linkedin;
  const facebook = userData?.facebook;

  const profileOptions = [
    {
      data: phone,
      label: "Verify phone number",
    },
    {
      data: city,
      label: "Add city location",
    },
    {
      data: email,
      label: "Verify Email ID",
    },
    {
      data: linkedin,
      label: "Link Facebook Profile",
    },
    {
      data: facebook,
      label: "Link LinkedIn Profile",
    },
    {
      data: photo,
      label: "Add profile pic",
    },
    {
      data: pan,
      label: "Add PAN card number",
    },
    {
      data: aadhar,
      label: "Add Aadhar card number",
    },
    {
      data: dob,
      label: "Add date of birth",
    },
  ];
  return (
    <>
      <HomeNavbar />
      {isLoading && <Loader />}

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
                  {
                    photo?
                    <img
                      src={photo}
                      className="h-24 w-24 object-contain rounded-full"
                      alt=""
                      />
                      :
                      <Avatar name={name} />
                  }
                </div>
                <div className="place-self-end justify-self-start">
                  <div className="text-gray-500">Name</div>
                  <div className="text-lg font-light">{name}</div>
                </div>
                <div>
                  <div className="text-gray-500">Email</div>
                  <div className="text-lg font-light">{email}</div>
                </div>
                <div>
                  <div className="text-gray-500">Date of Birth</div>
                  <div className="text-lg font-light">
                    {dob === "" && "Not added"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Phone Number</div>
                  <div className="text-lg font-light">
                    {phone === "" && "Not added"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">City of Residence</div>
                  <div className="text-lg font-light">
                    {city === "" && "Not added"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">PAN Number</div>
                  <div className="text-lg font-light">
                    {pan === "" && "Not added"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">Aadhar Number</div>
                  <div className="text-lg font-light">
                    {aadhar === "" && "Not added"}
                  </div>
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
                    <div className="w-[86%] py-3 px-4 text-sm">
                      {item.label}
                    </div>
                    <div className="w-[14%] border-l border-gray-300 flex items-center justify-center">
                      {item.data ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaTimesCircle className="text-red-500" />
                      )}
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
          <input type="tel" placeholder="Phone number" />
        </form>
      </Model>
    </>
  );
};

export default MyProfile;
