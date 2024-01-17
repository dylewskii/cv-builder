import cvCSS from "../styles/CV.module.css";

export default function CV() {
  return (
    <main className={cvCSS.cvContainer}>
      <section className={cvCSS.cvSection}>
        <div className={cvCSS.cvPreview}>
          <img alt="CV preview"></img>
        </div>
        <div className={cvCSS.cvOptions}>
          <p className={cvCSS.cvName}>Jon Jones</p>
          <p>Created: </p>
          <nav className={cvCSS.cvNav}>
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

      <section className={cvCSS.cvSection}>
        <div className={cvCSS.cvPreview}>
          <svg
            className={cvCSS.plusIcon}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path
              fill="white"
              d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
            />
          </svg>
        </div>
        <div className={cvCSS.cvOptions}>
          <p className={cvCSS.cvName}>Create a CV</p>
          <p>
            Create a tailored CV for each job application - increase your
            chances of getting hired!
          </p>
        </div>
      </section>
    </main>
  );
}
