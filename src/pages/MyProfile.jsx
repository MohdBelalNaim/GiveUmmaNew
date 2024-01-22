import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import Button from "../components/Button";
import { FaCheck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import MyCampaigns from "../components/MyProfilePage/MyCampaigns";
import useModel from "../customHooks/useModel";
import {
  doc,
  getDoc,
  getDocs,
  query,
  where,
  collection,
} from "firebase/firestore";
import { database } from "../utils/firebaseConfig";
import Loader from "../components/Loader";
import Avatar from "../components/Avatar";
import UpdateFormModel from "../components/MyProfilePage/UpdateProfile";
import { SpinnerCircular } from "spinners-react";

const MyProfile = () => {
  const [updateForm, toggleUpdateForm] = useModel();
  const uid = localStorage.getItem("user");
  let [userData, setUserData] = useState();
  let [campaigns, setUserCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingCampaigns, setLoadingCampaigns] = useState(false);

  async function getData() {
    return await getDoc(doc(database, "users", uid));
  }

  async function getFundraisers(email) {
    setLoadingCampaigns(true);
    const data = await getDocs(
      query(
        collection(database, "campaigns"),
        where("campaignerEmail", "==", email)
      )
    );
    setUserCampaigns(data.docs);
    setLoadingCampaigns(false);
  }
  useEffect(() => {
    getData().then(async (data) => {
      setUserData(data.data());
      getFundraisers(data.data().email);
      setIsLoading(false);
    });
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
      name: "phone",
      label: "Update phone number",
    },
    {
      data: city,
      name: "city",
      label: "Add city",
    },
    {
      data: email,
      name: "email",
      label: "Verify Email ID",
    },
    {
      data: linkedin,
      name: "linkedin",
      label: "Link Facebook Profile",
    },
    {
      data: facebook,
      name: "facebook",
      label: "Link LinkedIn Profile",
    },
    {
      data: photo,
      name: "photo",
      label: "Add profile pic",
    },
    {
      data: pan,
      name: "pan",
      label: "Add PAN card number",
    },
    {
      data: aadhar,
      name: "aadhar",
      label: "Add Aadhar card number",
    },
    {
      data: dob,
      name: "dob",
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
                <Button onClick={toggleUpdateForm} size="md" type="outline">
                  Edit
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-x-28 gap-y-5 p-5">
                <div>
                  {photo ? (
                    <img
                      src={photo}
                      className="h-24 w-24 object-contain rounded-full"
                      alt=""
                    />
                  ) : (
                    <Avatar size="5xl" name={name} />
                  )}
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
                  <div className="text-lg font-light">{dob || "Not added"}</div>
                </div>
                <div>
                  <div className="text-gray-500">Phone Number</div>
                  <div className="text-lg font-light">
                    {phone || "Not added"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">City of Residence</div>
                  <div className="text-lg font-light">
                    {city || "Not added"}
                  </div>
                </div>
                <div>
                  <div className="text-gray-500">PAN Number</div>
                  <div className="text-lg font-light">{pan || "Not added"}</div>
                </div>
                <div>
                  <div className="text-gray-500">Aadhar Number</div>
                  <div className="text-lg font-light">
                    {aadhar || "Not added"}
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
                    key={index}
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
          {loadingCampaigns ? (
            <div className="grid place-items-center py-10">
              <SpinnerCircular color="dodgerblue" secondaryColor="lightgray" />
            </div>
          ) : (
            campaigns.map((campaign, index) => {
              return (
                <MyCampaigns
                  key={index}
                  data={campaign.data()}
                  id={campaign.id}
                />
              );
            })
          )}
        </section>
      </div>

      <UpdateFormModel
        data={profileOptions}
        controller={[updateForm, toggleUpdateForm]}
        updateProfile={getData}
      />
    </>
  );
};

export default MyProfile;
