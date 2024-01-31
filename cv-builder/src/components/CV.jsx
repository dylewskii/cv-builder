import { useContext } from "react";
import DataContext from "../context/DataContext";
import cvList from "../styles/CVList.module.css";

export default function CV({ children }) {
  return <section className={cvList.cvSection}>{children}</section>;
}

// NEED TO ADD SRC AS AN ARGUMENT ONCE PDF PREVIEW HAS BEEN IMPLEMENTED
CV.Preview = ({ onClick, children }) => {
  return (
    <div className={cvList.cvPreview} onClick={onClick}>
      {/* <img alt="CV preview" /> */}
      {children}
    </div>
  );
};

CV.Options = ({ children }) => {
  return <div className={cvList.cvOptions}>{children}</div>;
};

CV.Name = ({ children }) => {
  return <p className={cvList.cvName}>{children}</p>;
};

CV.Nav = ({ cvId }) => {
  const { handleDeleteCv } = useContext(DataContext);
  return (
    <nav className={cvList.cvNav}>
      <ul>
        <li>
          <a>Preview</a>
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
