import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [allDocuments, setAllDocuments] = useState([]);

  const handleDeleteCv = (cvId) => {
    setAllDocuments((prevDocuments) =>
      prevDocuments.filter((doc) => doc.id !== cvId)
    );
  };

  const handleCvPreview = (src) => {
    console.log("previewing");
    console.log(src);
  };

  return (
    <DataContext.Provider
      value={{ allDocuments, setAllDocuments, handleDeleteCv, handleCvPreview }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
