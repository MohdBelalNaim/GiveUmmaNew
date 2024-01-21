const Input = ({ type = "text", name, label, register }) => {
  return (
    <input
      type={type}
      {...register(name)}
      placeholder={label}
      className="p-3 border w-full rounded"
    />
  );
};

export default Input;
