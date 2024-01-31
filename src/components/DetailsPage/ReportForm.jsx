import React from "react";
import { FaTimes } from "react-icons/fa";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../utils/firebaseConfig";
import toast from "react-hot-toast";
import moment from "moment";

const ReportForm = ({ controller, campaign }) => {
  const [report, setReport] = controller;
  const { register, handleSubmit } = useForm();
  async function createReport(d) {
    d.campaignId = campaign;
    d.date = moment().format("Do MMM YYYY")
    d.status="unread"
      const ref = collection(database, "reports")
      await addDoc(ref, d)
          .then(saved => {
              toast.success("Campaign reported successfully")
              setReport(false)
          })
          .catch(err => {
              console.log(err)
              toast.error("Cannot report this fundriser at the moment")
          })
      
  }
  return (
    <div className="fixed inset-0 z-10 glass grid place-items-center">
        <div className="w-[34%] bg-white rounded-md overflow-hidden animate__animated animate__bounceIn max-sm:w-[90%]">
        <div className="flex justify-between font-medium text-lg p-4 border-bottom">
          <span>Report this fundraiser</span>
          <FaTimes
            className="cursor-pointer"
            onClick={() => setReport(false)}
          />
        </div>
        <form onSubmit={handleSubmit(createReport)}>
          <div className="px-4 pb-4">
            <select
              name=""
              {...register("title")}
              id=""
              className="w-full p-2 border mb-3"
            >
              <option value="">Select a reason</option>
              <option value="This is a fake fundraiser">
                This is a fake fundraiser
              </option>
              <option value="The story is not legitimate">
                The story is not legitimate
              </option>
              <option value="This benificary does not needs money">
                This benificary does not needs money
              </option>
            </select>
            <textarea
              {...register("detail")}
              placeholder="Please elaborate your issue"
              className="w-full border p-3 mb-2"
              cols="30"
              rows="6"
            ></textarea>
            <Button width={"full"} submit size={"md"} type={"primary"}>
              Submit report
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportForm;
