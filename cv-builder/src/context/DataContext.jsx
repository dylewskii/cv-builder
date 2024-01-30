import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [allDocuments, setAllDocuments] = useState([]);

  return (
    <DataContext.Provider value={{ allDocuments, setAllDocuments }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
