import { FaTimes } from "react-icons/fa";
import Button from "./Button";

const Model = ({ children, controller, title, btnText = "Submit" }) => {
  const [visible, toggleModel] = controller;
  return (
    <div className={`grid fixed inset-0 z-50 glass ${!visible && "hidden"}`}>
      <div className="bg-white max-w-[500px] w-full place-self-center rounded-lg overflow-hidden animate__animated animate__bounceIn">
        <div className="p-6 flex border-b">
          <div className="flex text-xl gap-3 items-center mr-auto">{title}</div>
          <FaTimes onClick={toggleModel} className="text-xl cursor-pointer" />
        </div>
        <div className="max-h-[70vh] overflow-y-auto">{children}</div>
        <div className="p-4 text-center border-t">
          <Button type="primary">{btnText}</Button>
        </div>
      </div>
    </div>
  );
};

export default Model;
