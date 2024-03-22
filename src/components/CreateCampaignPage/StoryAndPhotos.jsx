import Input from "../Input";
import React, { useEffect, useRef, useState } from "react";
import "@mdxeditor/editor/style.css";
import {
  MDXEditor,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  InsertImage,
  imagePlugin,
  listsPlugin,
  ListsToggle,
  headingsPlugin,
  BlockTypeSelect,
} from "@mdxeditor/editor";
import useModel from "../../customHooks/useModel";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Styles from "./StoryAndPhotos.module.css";
import placeholder from "../../assets/images/largePlaceholder.png";

const StoryAndPhotos = ({ register, watch, setValue }) => {
  const image = watch("campaignImage");

  const [width, setWidth] = useState(0);

  const dataRef = useRef("");

  useEffect(() => {
    setWidth(window.innerWidth);
    // const handleResize = () => {
    // };

    // window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, []);

  const [uploading, toggleUploading] = useModel();
  function handleTextarea() {
    setValue("story", dataRef.current.getMarkdown());
  }

  const storage = getStorage();
  return (
    <section className="grid gap-y-4">
      <div className="font-bold mt-3 text-lg">Add your story and title</div>
      <Input label="Campaign title" name="campaignTitle" register={register} />

      <div className={`relative ${Styles.head}`}>
        {uploading && (
          <div className="inset-0 absolute glass z-50 rounded-lg text-white grid place-items-center text-xl">
            Uploading Image
          </div>
        )}
        <MDXEditor
          ref={dataRef}
          onChange={(e) => handleTextarea(e)}
          className={`max-sm:w-[300px] border rounded-lg border-gray-200 h-[400px] overflow-auto text-black`}
          markdown="Your story here"
          plugins={[
            listsPlugin(),
            headingsPlugin(),
            imagePlugin({
              imageUploadHandler: async (data) => {
                if (data.size / 1000 > 1024) {
                  alert(
                    "Maximum allowed size for images is 1 MB, Please upload smaller image"
                  );
                  console.log(data);
                  return Promise.resolve(placeholder);
                }
                toggleUploading();
                const imageRef = ref(storage, `/story-images/${data.name}`);
                return Promise.resolve(
                  await uploadBytes(imageRef, data)
                    .then(async () => {
                      return getDownloadURL(imageRef)
                        .then((url) => {
                          toggleUploading();
                          return url;
                        })
                        .catch((err) => console.log(err));
                    })
                    .catch((err) => console.log(err))
                );
              },
            }),
            toolbarPlugin({
              toolbarContents: () => {
                return (
                  <>
                    <UndoRedo />
                    <BoldItalicUnderlineToggles />
                    <InsertImage />
                    <ListsToggle />
                    <BlockTypeSelect />
                  </>
                );
              },
            }),
          ]}
        />
        <textarea
          hidden
          {...register("story")}
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div className="font-bold">Select a photo for your campaign</div>
      <div className="grid grid-cols-3 gap-4">
        {image &&
          Array.from(image).map((item) => {
            console.log(item);
            return (
              <div className="bg-blue-100 rounded-lg p-2">
                <img
                  src={URL.createObjectURL(item)}
                  className="h-44 w-44 object-contain rounded-md object-center"
                />
                <div className="mt-2 text-ms text-center font-medium text-blue-600">
                  {item?.name}
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            {...register("campaignImage")}
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="image/*"
            multiple
          />
        </label>
      </div>
        <div className="flex gap-2 py-3">
          <input type="checkbox" name="" id="zakat" />
          <label htmlFor="zakat">This campaign is eligible to recieve Zakat funds</label>
        </div>
    </section>
  );
};

export default StoryAndPhotos;
