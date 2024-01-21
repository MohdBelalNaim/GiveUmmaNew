import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import StoryAndPhotos from "../components/CreateCampaignPage/StoryAndPhotos";
import BasicDetails from "../components/CreateCampaignPage/BasicDetails";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../utils/firebaseConfig";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { SpinnerCircular } from "spinners-react";
import { useForm } from "react-hook-form";

const CreateCampaign = () => {
  const [story, setStory] = useState(false);
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);

  const { register, handleSubmit, watch,setValue } = useForm();

  const toggleForm = () => {
    setStory(!story);
    window.scrollTo(0, 0);
  };

  const urlList = [];
  function getData(data) {
    setCreating(true);
    uploadImage(data);
  }
  let count = 0;
  function uploadImage(data) {
    const storage = getStorage();
    Array.from(data.campaignImage).forEach((index, item) => {
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
    setDoc(doc(database, "campaigns", data.campaignerEmail), data)
      .then(() => {
        setCreating(false);
        navigate("/campaign-confirmation");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        
      });
  }

  return (
    <div>
      <HomeNavbar />
      <div className="max-w-[800px] mx-auto p-4 sm:pb-5 grid gap-y-4">
        <div className="font-bold text-2xl">Create your campaign</div>
        <div className="w-max bg-gray-100 text-xs py-1 px-3 rounded-full">
          GiveUmma does not charge any platform fee!
        </div>
        <form onSubmit={handleSubmit(getData)}>
          {story ? (
            <StoryAndPhotos register={register} setValue={setValue} watch={watch} />
          ) : (
            <BasicDetails controller={register} />
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
