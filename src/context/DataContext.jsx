import { createContext, useState } from "react";

const DataContext = createContext("");

export const DataProvider = ({ children }) => {
  const [allDocuments, setAllDocuments] = useState([]);

  const handleDeleteCv = (cvId) => {
    setAllDocuments((prevDocuments) =>
      prevDocuments.filter((doc) => doc.id !== cvId)
    );
  };

  return (
    <DataContext.Provider
      value={{
        allDocuments,
        setAllDocuments,
        handleDeleteCv,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
