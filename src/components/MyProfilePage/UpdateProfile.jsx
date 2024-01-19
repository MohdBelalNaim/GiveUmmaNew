import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../utils/firebaseConfig";
import Button from "../Button";
import Input from "../Input";
import Model from "../Model";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const UpdateFormModel = ({ data, controller, updateProfile }) => {
  const [ state, toggleForm ] = controller;
  const { register, setValue, handleSubmit } = useForm();

  const email = data.find((d) => d.name == "email").data;

  const updateData = (formData) => {
    updateDoc(doc(database, "users", email), formData)
      .then((success) => {
        toast.success("Data updated successfully!");
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        updateProfile();
        toggleForm();
      });
  };

  data = data.filter((d) => d.name != "email");

  return (
    <Model title="Update details" controller={controller}>
      <form className="p-4 space-y-4" onSubmit={handleSubmit(updateData)}>
        {data.map((input, index) => {
          if (input.name == "email") return;

          const label = input.label.split(" ");
          label.shift();

          if (input.data) setValue(input.name, input.data);

          return (
            <Input
              key={index}
              name={input.name}
              label={label.join(" ")}
              register={register}
            />
          );
        })}
        <Button type="primary" submit>
          Update
        </Button>
      </form>
      <Toaster />
    </Model>
  );
};

export default UpdateFormModel;