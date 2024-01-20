import React from "react";

const StoryAndPhotos = () => {

  return (
    <section className="grid gap-y-4">
      <div className="font-bold mt-3 text-lg">Add your story and media</div>
      <textarea
        cols="30"
        rows="10"
        placeholder="Enter your story"
        className="p-3 border border-gray-200 rounded-lg"
      ></textarea>

      <div className="font-bold">Select a photo for your campaign</div>
      {/* <div className="grid grid-cols-3 gap-4">
        {image &&
          image.map((item) => {
            console.log(item)
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
      </div> */}
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            class="hidden"
            accept="image/*"
          />
        </label>
      </div>
    </section>
  );
};

export default StoryAndPhotos;
