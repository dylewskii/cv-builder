import cvList from "../styles/CVList.module.css";
// import { useState } from "react";

export default function CV({ handleCreateClick }) {
  return (
    <main className={cvList.cvContainer}>
      <section className={cvList.cvSection}>
        <div className={cvList.cvPreview}>
          <img alt="CV preview"></img>
        </div>
        <div className={cvList.cvOptions}>
          <p className={cvList.cvName}>Jon Jones</p>
          <p>Created: </p>
          <nav className={cvList.cvNav}>
            <ul>
              <li>
                <a>Preview</a>
              </li>
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a>Download PDF</a>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className={cvList.cvSection}>
        <div className={cvList.cvPreview} onClick={handleCreateClick}>
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
        </div>
        <div className={cvList.cvOptions}>
          <p className={cvList.cvName}>Create a CV</p>
          <p>
            Create a tailored CV for each job application - increase your
            chances of getting hired!
          </p>
        </div>
      </section>
    </main>
  );
}
