import { FaIndianRupeeSign } from "react-icons/fa6";
import Button from "../Button";
import Model from "../Model";
import { useCallback, useEffect, useState } from "react";

const DonationForm = ({ controller }) => {
  const [percent, setPercent] = useState(10);
  const [percentAmount, setPercentAmount] = useState(0);
  const [amount, setAmount] = useState(0);

  const [totalAmount, setTotalAmount] = useState(0);

  const updateAmount = useCallback(() => {
    const newValue = Math.round((percentAmount / amount) * 100);
    const newAmnt = Number(percentAmount) + Number(amount);
    setPercent(newValue);
    setTotalAmount(newAmnt);
  }, [amount, percentAmount]);

  useEffect(updateAmount, [amount, percentAmount]);

  return (
    <Model
      title="Donation Form"
      btnText="Proceed to pay"
      controller={controller}
    >
      <form className="py-8 px-8 grid gap-4">
        <div className="text-sm text-center">Choose or enter your amount</div>
        <div className="flex justify-center gap-x-4">
          <Button type="outline" onClick={() => setAmount(1500)}>
            <FaIndianRupeeSign /> 1500
          </Button>
          <Button type="outline" onClick={() => setAmount(3000)}>
            <FaIndianRupeeSign /> 3000
          </Button>
          <Button type="outline" onClick={() => setAmount(5000)}>
            <FaIndianRupeeSign /> 5000
          </Button>
        </div>
        <input
          type="number"
          min={0}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
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
                <input
                  type="number"
                  className="border border-zinc-600 rounded-l-lg text-center p-2 w-16 placeholder:text-zinc-600"
                  value={percent}
                  min={0}
                  max={100}
                  readOnly
                />

                <input
                  value={percentAmount}
                  min={0}
                  type="number"
                  className="border border-zinc-600 rounded-r-lg text-center p-2 w-28"
                  onChange={(e) => {
                    setPercentAmount(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <p className="text-sm">Total Amount INR {totalAmount}</p>
        </div>
        <input
          type="text"
          placeholder="Name *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="email"
          placeholder="Email address *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="tel"
          placeholder="Mobile number *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="text"
          placeholder="Address *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
        <input
          type="text"
          placeholder="Pan card (Optional : Required for Tax benifits) *"
          className="border-b border-zinc-950 px-4 py-3 placeholder:text-zinc-400"
        />
      </form>
    </Model>
  );
};

export default DonationForm;
