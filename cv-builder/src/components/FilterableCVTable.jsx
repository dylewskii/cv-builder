// import { useState } from "react";
import tableCSS from "../styles/FilterableCVTable.module.css";

export default function FilterableCVTable({ isCreating, handleCreateClick }) {
  return (
    <div className={tableCSS.container}>
      <h2 className={tableCSS.heading}>All Resumes</h2>
      <div className={tableCSS.options}>
        <nav className={tableCSS.optionsNav}>
          <ul>
            <li>
              <a href="">Resumes</a>
            </li>
            <li>
              <a href="">Cover Letters</a>
            </li>
          </ul>
        </nav>
        {isCreating ? (
          <button onClick={handleCreateClick} className={tableCSS.btn}>
            Close
          </button>
        ) : (
          <button onClick={handleCreateClick} className={tableCSS.btn}>
            &#43; Create CV
          </button>
        )}
      </div>
    </div>
  );
}
