import headerCSS from "../styles/CVHeader.module.css";

export default function CVHeader({ isCreating, handleCreateClick }) {
  return (
    <div className={headerCSS.container}>
      <h2 className={headerCSS.heading}>All Resumes</h2>
      <div className={headerCSS.options}>
        {/* <nav className={headerCSS.optionsNav}>
          <ul>
            <li>
              <a href="">Resumes</a>
            </li>
            <li>
              <a href="">Cover Letters</a>
            </li>
          </ul>
        </nav> */}
        {isCreating ? (
          <button onClick={handleCreateClick} className={headerCSS.btn}>
            Close
          </button>
        ) : (
          <button onClick={handleCreateClick} className={headerCSS.btn}>
            &#43; Create CV
          </button>
        )}
      </div>
    </div>
  );
}