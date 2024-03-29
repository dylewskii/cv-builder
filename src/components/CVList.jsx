import { useContext } from "react";
import DataContext from "../context/DataContext";
import cvList from "../styles/CVList.module.css";
import CVCard from "./CVCard";

export default function CVList({ handleCreateClick, handleCvPreview }) {
  const { allDocuments } = useContext(DataContext);
  const checkNameValidity = (first, last, index) => {
    return first || last ? `${first} ${last}`.trim() : `Untitled ${index + 1}`;
  };
  return (
    <main className={cvList.cvContainer}>
      {allDocuments.map((doc, i) => (
        <CVCard key={doc.id}>
          <CVCard.Preview>
            {doc.snapshot ? (
              <img
                className={cvList.imgPreview}
                src={doc.snapshot}
                alt="CV Preview"
              />
            ) : (
              <p>{fName ? `${fName}'s CV` : `CV #${i}`}</p>
            )}
          </CVCard.Preview>
          <CVCard.Options>
            <CVCard.Name>
              {checkNameValidity(
                doc.personalDetails.fName,
                doc.personalDetails.lName,
                i
              )}
            </CVCard.Name>
            <p className={cvList.createdDate}>Created: {doc.createdDate}</p>
            <CVCard.Nav
              cvId={doc.id}
              src={doc.snapshot}
              handleCvPreview={handleCvPreview}
            />
          </CVCard.Options>
        </CVCard>
      ))}

      <CVCard key={crypto.randomUUID()}>
        <CVCard.Preview onClick={handleCreateClick}>
          <svg
            className={cvList.plusIcon}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path
              className={cvList.plusIconPath}
              fill="white"
              d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
            />
          </svg>
        </CVCard.Preview>
        <CVCard.Options>
          <CVCard.Name>Create a CV</CVCard.Name>
          <p>
            Create a tailored CV for each job application - increase your
            chances of getting hired!
          </p>
        </CVCard.Options>
      </CVCard>
    </main>
  );
}
