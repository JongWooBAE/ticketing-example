import { useContext } from "react";
import { RadioContext } from "./radioContext";

export default function Radio({ children, id, value, name }) {
  const group = useContext(RadioContext);
  return (
    <label className="flex w-[calc(100px)] justify-center">
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
        className={"hidden peer"}
      />
      <label
        htmlFor={id}
        className=" flex justify-center bg-white border border-blue-500 text-blue-500 rounded-md w-full py-1.5 text-[16px] peer-checked:text-white peer-checked:bg-blue-500 peer-checked:font-semibold"
      >
        {children}
      </label>
    </label>
  );
}
