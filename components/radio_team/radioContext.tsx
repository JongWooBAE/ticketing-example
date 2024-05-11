import { createContext } from "react";

export const RadioContext = createContext({
    value: () => {},
    onChange: (target) => {},
});