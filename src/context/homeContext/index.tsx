import { createContext, useContext, useState } from "react";

const HomeContext = createContext(
  undefined as unknown as ReturnType<typeof useHomeContextFunctions>,
);

export const HomeContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const value = useHomeContextFunctions();
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export const useHomeContext = () => {
  const value = useContext(HomeContext);
  return { ...value };
};

const useHomeContextFunctions = () => {
  const [formVal1, setFormVal1] = useState<string>("");
  const [formVal2, setFormVal2] = useState<string>("");
  return {
    formVal1,
    setFormVal1,
    formVal2,
    setFormVal2,
  };
};
