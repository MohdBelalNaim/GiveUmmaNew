import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import StoryAndPhotos from "../components/CreateCampaignPage/StoryAndPhotos";
import BasicDetails from "../components/CreateCampaignPage/BasicDetails";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import { database } from "../utils/firebaseConfig";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { SpinnerCircular } from "spinners-react";
import { useForm } from "react-hook-form";

const CreateCampaign = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/auth");
    }
    const user = localStorage.getItem("user");
    async function getUserData() {
      const userRef = doc(database, "users", user);
      const data = await getDoc(userRef);
      setUserData(data.data());
    }
    getUserData();
  }, []);

  const [story, setStory] = useState(false);
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);

  const { register, handleSubmit, watch, setValue } = useForm();

  const toggleForm = () => {
    setStory(!story);
    window.scrollTo(0, 0);
  };

  const urlList = [];
  function getData(data) {
    data.campaignerEmail = userData?.email;
    data.campaignerName = userData?.name;
    data.campaignerImage = userData?.photo || "";
    data.views = "0";
    data.status = "Pending";
    data.zakatVerified = false;
    data.taxBenfits = false;
    data.raisedAmount = 0;
    data.totalTip = 0;
    setCreating(true);
    uploadImage(data);
  }
  let count = 0;
  function uploadImage(data) {
    const storage = getStorage();
    Array.from(data.campaignImage).forEach((item, index) => {
      const imageRef = ref(storage, `/campaign-images/${item.name}`);
      uploadBytes(imageRef, item)
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              urlList.push(url);
              count++;
              if (count == Array.from(data.campaignImage).length) {
                data.campaignImage = urlList;
                saveData(data);
              }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    });
  }

  function saveData(data) {
    const userRef = collection(database, "campaigns");
    addDoc(userRef, data)
      .then(() => {
        setCreating(false);
        navigate("/campaign-confirmation");
      })
      .catch((err) => console.log(err))
      .finally(() => {});
  }

  return (
    <div>
      <HomeNavbar />
      <div className="max-w-[800px] mx-auto p-4 sm:pb-5 grid gap-y-4 ">
        <div className="font-bold text-2xl">Create your campaign</div>
        <div className="w-max bg-gray-100 text-xs py-1 px-3 rounded-full">
          GiveUmma does not charge any platform fee!
        </div>
        <form onSubmit={handleSubmit(getData)}>
          {story ? (
            <StoryAndPhotos
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ) : (
            <BasicDetails controller={register} setValue={setValue} />
          )}

          <div className="flex gap-4 mt-4">
            {story ? (
              <>
                <Button onClick={toggleForm} type="outline" size="md">
                  <FaArrowLeft />
                  Back
                </Button>
                <Button size="md" type="primary" submit>
                  {creating ? (
                    <div className="flex justify-center items-center">
                      <SpinnerCircular size={30} color="#ffffff" />
                    </div>
                  ) : (
                    <>
                      Submit <FaCheck />
                    </>
                  )}
                </Button>
              </>
            ) : (
              <Button onClick={toggleForm} size="md" type="primary">
                Next <FaArrowRight />
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaign;
