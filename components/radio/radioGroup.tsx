import { RadioContext } from "./radioContext";

export default function RadioGroup({ label, className, children, value, onChange }) {
  return (
    <fieldset className={className}>
      <legend>{label}</legend>
      <RadioContext.Provider value={{value,onChange}}>{children}</RadioContext.Provider>
    </fieldset>
  );
}
