import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [language, setLanguage] = useState("tr");
  const data = { language, setLanguage };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useLanguage = () => useContext(Context);

export default Provider;
