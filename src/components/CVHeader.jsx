import headerCSS from "../styles/CVHeader.module.css";
import { FaPlus } from "react-icons/fa";

export default function CVHeader({ isCreating, handleCreateClick }) {
  return (
    <div className={headerCSS.container}>
      <h2 className={headerCSS.heading}>
        {isCreating ? "Create Your CV" : "All CVs"}
      </h2>
      <div className={headerCSS.options}>
        {/* <nav className={tableCSS.optionsNav}>
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
            Create CV <FaPlus className={headerCSS.icon} />
          </button>
        )}
      </div>
    </div>
  );
}
