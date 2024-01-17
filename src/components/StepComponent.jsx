import React from "react";
import Styles from "../assets/css/timeline.module.css";

const StepComponent = ({ index, desc, title, last }) => {
  return (
    <div className={Styles.timeline}>
      <div
        className={`${Styles.price} primary text-center w-32 text-white py-1 font-bold text-lg`}
      >
        {index}
      </div>
      <div className={`${Styles.line} py-5 w-full  ${last && Styles.last}`}>
        <div className={`w-[1px] primary h-full mx-auto`}></div>
      </div>
      <div
        className={`${Styles.date} font-semibold text-lg text-primary py-1 px-8`}
      >
        {title}
      </div>
      <div
        className={`${Styles.desc} max-lg:container lg:max-w-screen-md bg-gray-100 p-7 rounded-2xl `}
      >
        {desc}
      </div>
    </div>
  );
};

export default StepComponent;
