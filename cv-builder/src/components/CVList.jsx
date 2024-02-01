import { useContext } from "react";
import DataContext from "../context/DataContext";
import cvList from "../styles/CVList.module.css";
import CV from "./CV";

export default function CVList({ handleCreateClick }) {
  const { allDocuments } = useContext(DataContext);
  return (
    <main className={cvList.cvContainer}>
      {allDocuments.map((doc, i) => (
        <CV key={doc.id}>
          <CV.Preview>
            {doc.snapshot ? (
              <img
                src={doc.snapshot}
                alt="CV preview"
                className={cvList.imgPreview}
              />
            ) : (
              <p>No Preview Available</p>
            )}
          </CV.Preview>
          <CV.Options>
            <CV.Name>
              {`${doc.personalDetails.fName} ${doc.personalDetails.lName}`}
            </CV.Name>
            <p>Created: {/* need to render the creation date */}</p>
            <CV.Nav cvId={doc.id} />
          </CV.Options>
        </CV>
      ))}

      <CV key={crypto.randomUUID()}>
        <CV.Preview onClick={handleCreateClick}>
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
        </CV.Preview>
        <CV.Options>
          <CV.Name>Create a CV</CV.Name>
          <p>
            Create a tailored CV for each job application - increase your
            chances of getting hired!
          </p>
        </CV.Options>
      </CV>
    </main>
  );
}
