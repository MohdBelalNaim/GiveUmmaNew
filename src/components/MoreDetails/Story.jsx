import React from "react";
import { BsCalendar2, BsFillPersonFill, BsGlobe, BsPersonFill } from "react-icons/bs";
const Story = () => {
  return (
    <div>
      <div className="text-2xl mt-4 max-sm:text-[18px]">
        Support madarsa hanfia ziaul quran building a new campus for 1200
        students
      </div>
      <img
        src="https://picsum.photos/1200"
        className="w-full h-[400px] max-sm:h-[320px] object-cover mt-4"
        alt=""
      />
      <div className="text-2xl max-sm:text-lg text-gray-400 mt-4">
        <span className="text-black">₹5,998.00</span> raised of ₹59,99,999.00
      </div>
      <div className="w-full h-3 mt-4 rounded-full bg-gray-300">
        <div className="w-[60%] h-3 rounded-full primary"></div>
      </div>
      <div className="flex justify-between mt-4 text-gray-500 max-sm:text-sm">
        <div className="flex gap-2 items-center">
          <BsPersonFill size={22} /> <span className="text-black">28</span> Givers
        </div>
        <div className="flex gap-2 items-center">
          <BsCalendar2 size={18} /> <span className="text-black">42</span> Days left
        </div>
      </div>
      <div className="grid max-sm:grid-cols-1 grid-cols-2 mt-4 gap-4">
        <div className="border rounded p-2">
          <div className="text-sm text-gray-500" >Campaigner</div>
          <div>Sajad Khaki</div>
          <div className="text-sm text-gray-500" >from, India</div>
        </div>
        <div className="border rounded p-2">
          <div className="text-sm text-gray-500" >Campaigner</div>
          <div>Sajad Khaki</div>
          <div className="text-sm text-gray-500" >from, India</div>
        </div>
      </div>
      <div>
        <div className="text-xl flex items-center gap-3  py-5 border-b"><BsGlobe size={22}/> Story</div>
        <div className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod sapiente temporibus provident beatae iste debitis ratione. Iusto quas, in neque odit natus soluta id atque consectetur doloribus? Ad, repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod sapiente temporibus provident beatae iste debitis ratione. Iusto quas, in neque odit natus soluta id atque consectetur doloribus? Ad, repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod sapiente temporibus provident beatae iste debitis ratione. Iusto quas, in neque odit natus soluta id atque consectetur doloribus? Ad, repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod sapiente temporibus provident beatae iste debitis ratione. Iusto quas, in neque odit natus soluta id atque consectetur doloribus? Ad, repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod sapiente temporibus provident beatae iste debitis ratione. Iusto quas, in neque odit natus soluta id atque consectetur doloribus? Ad, repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod sapiente temporibus provident beatae iste debitis ratione. Iusto quas, in neque odit natus soluta id atque consectetur doloribus? Ad, repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod sapiente temporibus provident beatae iste debitis ratione. Iusto quas, in neque odit natus soluta id atque consectetur doloribus? Ad, repellendus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quod sapiente temporibus provident beatae iste debitis ratione. Iusto quas, in neque odit natus soluta id atque consectetur doloribus? Ad, repellendus!
        </div>
      </div>
    </div>
  );
};

export default Story;
