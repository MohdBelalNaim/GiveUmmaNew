import React, { useEffect, useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { FaTimes } from "react-icons/fa";
import {
  IoDocumentTextOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { useForm } from "react-hook-form";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { database, storage } from "../utils/firebaseConfig";
import { useParams } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import toast from "react-hot-toast";

const WithdrawFunds = () => {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const [supporting, setSupporting] = useState(null);
  const [bank, setBank] = useState(null);
  const formatFileSize = function (bytes) {
    const sufixes = ["B", "kB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
  };

  function handleFile(e) {
    const file = e.target.files[0];

    // Check file type
    const acceptedTypes = ["application/pdf", "image/jpeg"];
    if (!acceptedTypes.includes(file.type)) {
      alert("Please select a PDF or JPEG file.");
      return;
    }

    // Check file size
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes
    if (file.size > maxSize) {
      alert("File size exceeds the maximum limit of 2MB.");
      return;
    }

    setSupporting(file);
  }

  async function uploadDocument() {
    const filename = `${Date.now()}-${supporting.name}`;
    const storageRef = ref(storage, filename);
    const uploadTask = await uploadBytes(storageRef, supporting);
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  }

  async function bankExists(data) {
    const collectionRef = collection(database, "banks");
    const userQuery = query(
      collectionRef,
      where("user", "==", localStorage.getItem("user")),
      where("campaign", "==", data.campaign)
    );
    const userSnapshot = await getDocs(userQuery);
    return userSnapshot.size > 0;
  }

  async function saveAccountInfo(data) {
    const bankData = {
      name: data.bankname,
      account: data.accountnumber,
      ifsc: data.ifsc,
      branch: data.branch,
      type: data.type,
      document: data.document,
      user: data.user,
      campaign: data.campaign,
    };
    let status = await bankExists(bankData);
    if (status) alert("Exists");
    else {
      try {
        await addDoc(collection(database, "banks"), bankData);
        alert("Bank saved");
      } catch (err) {
        alert("Can't save bank");
        console.log(err);
      }
    }
  }

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  async function withdrawFund(data) {
    const docUrl = await uploadDocument();
    data.user = localStorage.getItem("user");
    data.campaign = id;
    data.document = docUrl;
    data.status = "Pending";
    data.date = formattedToday;

    const withdrawlRef = collection(database, "withdrawls");
    try {
      await addDoc(withdrawlRef, data);
      await saveAccountInfo(data);
      toast.success("Withdrawl request submitted successfully!");
    } catch (e) {
      alert("Can't upload");
      console.log(e);
    }
  }

  useEffect(() => {
    async function getCampaignDetails() {
      const data = await getDoc(doc(database, "campaigns", id));
      console.log(data.data());
    }

    async function getBankDetails() {
      const collectionRef = collection(database, "banks");
      const userQuery = query(
        collectionRef,
        where("user", "==", localStorage.getItem("user")),
        where("campaign", "==", id)
      );
      const userSnapshot = await getDocs(userQuery);
      setValue("accountnumber", userSnapshot.docs[0].data()?.account);
      setValue("ifsc", userSnapshot.docs[0].data()?.ifsc);
      setValue("bankname", userSnapshot.docs[0].data()?.name);
      setValue("branch", userSnapshot.docs[0].data()?.branch);
    }
    getBankDetails();
    getCampaignDetails();
  }, []);
  return (
    <div>
      <HomeNavbar />
      <div className="bg-white rounded-md w-[min(500px,95%)] mx-auto relative px-10 py-10">
        <div className="text-lg font-bold mb-4">Benificiary bank details </div>
        <form onSubmit={handleSubmit(withdrawFund)}>
          <div className="grid gap-y-3">
            <select
              {...register("type")}
              className="text-gray-500 bg-gray-100 border p-3 rounded w-full"
            >
              <option value="" disabled>
                Account type
              </option>
              <option value="current">Current</option>
              <option value="savings">Savings</option>
            </select>
            <input
              type="text"
              className="border p-3 rounded w-full"
              placeholder="Account number"
              {...register("accountnumber")}
            />
            <input
              type="text"
              className="border p-3 rounded w-full"
              placeholder="IFSC code"
              {...register("ifsc")}
            />
            <input
              type="text"
              className="border p-3 rounded w-full"
              placeholder="Bank name"
              {...register("bankname")}
            />
            <input
              type="text"
              className="border p-3 rounded w-full"
              placeholder="Branch Name"
              {...register("branch")}
            />
            {!supporting ? (
              <>
                <label htmlFor="uploaddoc">
                  <div
                    type="text"
                    className="border p-3 rounded w-full text-gray-400 flex items-center gap-2 bg-gray-100 cursor-pointer"
                    placeholder="Branch Name"
                  >
                    <IoDocumentTextOutline />
                    Upload documents
                  </div>

                  <input
                    onChange={(e) => handleFile(e)}
                    type="file"
                    name=""
                    id="uploaddoc"
                    hidden
                    accept=".pdf,.jpeg"
                  />
                </label>
                <div className="text-sm text-gray-500 flex items-center gap-3">
                  (Cancel cheque / Latest bank statement / Bank passbook){" "}
                  <button
                    className="tooltip"
                    data-tip="File size must not exceed 2MB"
                  >
                    <IoInformationCircleOutline size={14} />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center border rounded-md justify-between p-2 bg-gray-100">
                <div className="flex items-center text-xs gap-2">
                  <IoDocumentTextOutline size={32} className="text-gray-500" />
                  <div>
                    <div>
                      {supporting?.name.length > 40
                        ? supporting?.name.substring(0, 30) + "..."
                        : supporting?.name}
                    </div>
                    <div className="text-gray-500">
                      {formatFileSize(supporting?.size)}
                    </div>
                  </div>
                </div>
                <FaTimes
                  className="text-gray-500 cursor-pointer"
                  onClick={() => setSupporting(false)}
                />
              </div>
            )}
          </div>
          <div className="font-bold text-lg mt-6">Choose amount</div>
          <input
            type="text"
            className="border p-3 rounded w-full mt-4"
            placeholder="Amount"
            {...register("amount")}
          />

          <button className="w-full border border-black rounded-full py-2 mt-5 hover:bg-black hover:text-white">
            Submit request
          </button>
        </form>
      </div>
    </div>
  );
};

export default WithdrawFunds;
