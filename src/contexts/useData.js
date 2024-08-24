import { useContext } from "react";
import { DataContext } from "./DataContext";

const useData = () => {
  // This is where you are passing your state to all areas of your application
  return useContext(DataContext);
};

export default useData;
