import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import { IoDocumentOutline } from "react-icons/io5";
import { BsArrowRight, BsInfoCircle } from "react-icons/bs";

const UploadDocuments = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="w-[min(840px,98%)] mx-auto mb-48">
        <div className="text-xl py-6 font-bold">Upload documents</div>
        <div className="mt-8 text-lg text-gray-500 font-medium">
          Campaigner KYC
        </div>
        <div className="py-6 border-b">
          <div className="flex items-center justify-between">
            <div className="text-lg">PAN card</div>{" "}
            <button className="flex gap-2 primary items-center p-2 rounded-md">
              <IoDocumentOutline />
              Add PAN card
            </button>
          </div>
        </div>
        <div className="py-6 border-b">
          <div className="flex items-center justify-between">
            <div className="text-lg">Aadhar card</div>{" "}
            <button className="flex gap-2 primary items-center p-2 rounded-md">
              <IoDocumentOutline />
              Add Aadhar card
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <BsInfoCircle /> Please make sure that only last four digits of your
            aadhar card is visible in the document
          </div>
        </div>
        <div className="mt-32 text-lg text-gray-500 font-medium">
          Benificiary KYC
        </div>
        <div className="py-6 border-b">
          <div className="flex items-center justify-between">
            <div className="text-lg">PAN card</div>{" "}
            <button className="flex gap-2 primary items-center p-2 rounded-md">
              <IoDocumentOutline />
              Add PAN card
            </button>
          </div>
        </div>
        <div className="py-6 border-b">
          <div className="flex items-center justify-between">
            <div className="text-lg">Aadhar card</div>{" "}
            <button className="flex gap-2 primary items-center p-2 rounded-md">
              <IoDocumentOutline />
              Add Aadhar card
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <BsInfoCircle /> Please make sure that only last four digits of your
            aadhar card is visible in the document
          </div>
        </div>
        <div className="flex justify-center">
          <button className="primary px-4 py-2 gap-3 rounded-full mt-12 flex items-center">
            Update <BsArrowRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
