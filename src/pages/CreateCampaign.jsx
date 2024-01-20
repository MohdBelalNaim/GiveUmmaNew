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

const CreateCampaign = () => {
  const [story, setStory] = useState(false);
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);

  const toggleForm = () => {
    setStory(!story);
    window.scrollTo(0, 0);
  };

  

  // function storeData(
  //   type,
  //   campaignerName,
  //   campaignerEmail,
  //   campaignerPhone,
  //   benificiaryName,
  //   benificiaryEmail,
  //   benificiaryPhone,
  //   image
  // ) {
  //   setDoc(doc(database, "campaigns", campaignerEmail), {
  //     type,
  //     campaignerName,
  //     campaignerEmail,
  //     campaignerPhone,
  //     benificiaryName,
  //     benificiaryEmail,
  //     benificiaryPhone,
  //     image,
  //   })
  //     .then(() => {
  //       console.log("Data saved");
  //       setCreating(false);
  //       navigate("/campaign-confirmation");
  //     })
  //     .catch((err) => console.log(err));
  // }
  // async function createCampaign(
  //   type,
  //   campaignerName,
  //   campaignerEmail,
  //   campaignerPhone,
  //   benificiaryName,
  //   benificiaryEmail,
  //   benificiaryPhone,
  //   imageList
  // ) {
  //   const urlList = [];
  //   const storage = getStorage();
  //   setCreating(true);
  //   var count = 0;

  //   imageList.forEach((item) => {
  //     const imageRef = ref(storage, `/campaign-images/${item.name}`);
  //     uploadBytes(imageRef, item)
  //       .then(() => {
  //         getDownloadURL(imageRef)
  //           .then((url) => {
  //             urlList.push(url);
  //             count++;
  //             console.log(count);
  //             if (imageList.length === count) {
  //               storeData(
  //                 type,
  //                 campaignerName,
  //                 campaignerEmail,
  //                 campaignerPhone,
  //                 benificiaryName,
  //                 benificiaryEmail,
  //                 benificiaryPhone,
  //                 urlList
  //               );
  //             }
  //           })
  //           .catch((err) => console.log(err));
  //       })
  //       .catch((err) => console.log(err));
  //   });
  // }

  return (
    <div>
      <HomeNavbar />
      <div className="max-w-[500px] mx-auto p-4 sm:pb-5 grid gap-y-4">
        <div className="font-bold text-2xl">Create your campaign</div>
        <div className="w-max bg-gray-100 text-xs py-1 px-3 rounded-full">
          GiveUmma does not charge any platform fee!
        </div>

        {story ? (
          <StoryAndPhotos/>
        ) : (
          <BasicDetails/>
        )}

        <div className="flex gap-4">
          {story ? (
            <>
              <Button onClick={toggleForm} type="outline" size="md">
                <FaArrowLeft />
                Back
              </Button>

              <Button
                size="md"
                type="primary"
                onClick={() =>""}
              >
                {creating ? (
                  <div className="flex justify-center">
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
      </div>
    </div>
  );
};

export default CreateCampaign;
