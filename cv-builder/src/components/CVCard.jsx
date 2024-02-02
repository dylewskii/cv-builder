import { useContext } from "react";
import DataContext from "../context/DataContext";
import cvList from "../styles/CVList.module.css";

export default function CVCard({ children }) {
  return <section className={cvList.cvSection}>{children}</section>;
}

CVCard.Preview = ({ onClick, children }) => {
  return (
    <div className={cvList.cvPreview} onClick={onClick}>
      {children}
    </div>
  );
};

CVCard.Options = ({ children }) => {
  return <div className={cvList.cvOptions}>{children}</div>;
};

CVCard.Name = ({ children }) => {
  return <p className={cvList.cvName}>{children}</p>;
};

CVCard.Nav = ({ cvId, src, handleCvPreview }) => {
  const { handleDeleteCv } = useContext(DataContext);

  return (
    <nav className={cvList.cvNav}>
      <ul>
        <li>
          <a onClick={() => handleCvPreview(src)}>Preview</a>
        </li>
        <li>
          <a>Edit</a>
        </li>
        <li>
          <a>Download</a>
        </li>
        <li>
          <a onClick={() => handleDeleteCv(cvId)}>Delete</a>
        </li>
      </ul>
    </nav>
  );
};
