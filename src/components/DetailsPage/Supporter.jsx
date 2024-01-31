import { formatINR } from "../../utils/tools";
import Avatar from "../Avatar";

const Supporter = ({ data }) => {
  return (
    <div className="flex gap-4 items-center">
      <Avatar name={data?.name} size="sm" />
      <div className="border-b border-primary py-4 w-full">
        <div className="text-gray-500">{data?.name}</div>
        <div className="text-sm font-[500]">{formatINR(data?.amount)}</div>
      </div>
    </div>
  );
};

export default Supporter;
