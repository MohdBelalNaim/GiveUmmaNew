import { FaIndianRupeeSign } from "react-icons/fa6";
import Button from "../Button";
import Model from "../Model";
import { useCallback, useEffect, useRef, useState } from "react";
import { useController, useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { database } from "../../utils/firebaseConfig";
import toast from "react-hot-toast";
import { SpinnerCircular } from "spinners-react";
import moment from "moment";

const DonationForm = ({ controller, campaignID, updateDonations }) => {
  const defaultValues = {
    amount: 0,
    percentAmount: 0,
  };
  const date = moment().format("DD-MM-YYYY HH:mm:ss");
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  const amount = watch("amount");
  const percentAmount = watch("percentAmount");
  const percent = Math.round((percentAmount / amount) * 100) ?? 0;
  const totalAmount = Number(percentAmount) + Number(amount);
  const [model, toggleModel] = controller;
  const [loading, setLoading] = useState(false);

  const submitForm = (data) => {
    setLoading(true);
    data.tip = percentAmount;
    data.campaignId = campaignID;
    data.date = date;
    addDoc(collection(database, "donations"), data)
      .then((added) => {
        toast.success("Donated to campaign sucessfully");
        updateDonations();
        toggleModel();
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Cannot donate to campaign");
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Model title="Donation Form" controller={controller}>
      <form
        className="py-8 px-8 grid gap-4"
        onSubmit={handleSubmit(submitForm)}
      >
        <div className="text-sm text-center">Choose or enter your amount</div>
        <div className="flex justify-center gap-x-4">
          <Button type="outline" onClick={() => setValue("amount", 1500)}>
            <FaIndianRupeeSign /> 1500
          </Button>
          <Button type="outline" onClick={() => setValue("amount", 3000)}>
            <FaIndianRupeeSign /> 3000
          </Button>
          <Button type="outline" onClick={() => setValue("amount", 5000)}>
            <FaIndianRupeeSign /> 5000
          </Button>
        </div>
        <input
          type="number"
          min={0}
          id="amount"
          {...register("amount")}
          placeholder="Enter your own amount"
          className="border-2 border-zinc-950 px-4 py-3 rounded-lg placeholder:text-zinc-400"
        />
        <div className="rounded-lg p-4 bg-zinc-300 space-y-4">
          <p className="text-sm text-zinc-600">
            CivelJmma (an initiative of HilalLink) does not charge any fees from
            the benificiaries, we only rely on kind support from Civers like
            you.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-600">
              Support us by adding a tip of
            </p>
            <div className="grid">
              <div className="flex">
                <div className="border border-zinc-600 rounded-l-lg py-2 px-3 text-center min-w-16 bg-white">
                  {percent}%
                </div>
                <input
                  min={0}
                  type="number"
                  className="border border-zinc-600 rounded-r-lg text-center p-2 w-28"
                  {...register("percentAmount")}
                />
              </div>
            </div>
          </div>
          <p className="text-sm">Total Amount INR {totalAmount}</p>
        </div>
        <input
          type="text"
          placeholder="Name *"
          {...register("name")}
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="email"
          {...register("email")}
          placeholder="Email address *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="tel"
          {...register("mobile")}
          placeholder="Mobile number *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="text"
          {...register("address")}
          placeholder="Address *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="text"
          {...register("pan")}
          placeholder="Pan card (Optional : Required for Tax benifits) *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400 uppercase"
        />
        <div className="flex justify-center">
          <Button submit type="primary">
            {loading ? (
              <SpinnerCircular
                secondaryColor="lightgray"
                color="white"
                size={30}
              />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Model>
  );
};

export default DonationForm;
