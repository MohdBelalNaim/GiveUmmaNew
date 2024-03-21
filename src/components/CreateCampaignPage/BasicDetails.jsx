import {
  benificiaryFields,
  campaignerFields,
} from "../../utils/campaignFields";
import Input from "../Input";
import React, { useEffect, useState } from "react";

const BasicDetails = ({ controller, setValue }) => {
  
  function getDate() {
    let currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + 2);
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; // Months are 0-based, so add 1
    let day = currentDate.getDate();
    let formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
    setValue("date",formattedDate)
  }
  useEffect(() => {
      getDate()
  },[])
  return (
    <section className="grid gap-y-4">
      
      <div className="font-bold mt-3 text-lg">Beneficiary details</div>
      <select
        {...controller("benificiaryType")}
        className="border w-full p-3 rounded-lg border-gray-200 bg-gray-200"
      >
        <option value="individual">Individual</option>
        <option value="organisation">Organisation</option>
      </select>
      {benificiaryFields.map((data, index) => (
        <Input
          key={index}
          name={data.name}
          register={controller}
          label={data.label}
          type={data?.type}
        />
      ))}
      <div className="font-bold mt-3 text-lg">Goal amount and End date</div>
      <div className="flex items-center gap-2">
        <div className="text-2xl text-gray-600 border py-2 rounded px-3">₹</div>
        <Input
          label="Goal amount"
          name="goalAmount"
          type="number"
          register={controller}
        />
      </div>
      <Input
        label="Date"
        name="date"
        type="date"
        register={controller}
      />
    </section>
  );
};

export default BasicDetails;
