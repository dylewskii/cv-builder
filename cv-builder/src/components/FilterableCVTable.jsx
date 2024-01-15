import tableCSS from "../styles/FilterableCVTable.module.css";

export default function FilterableCVTable() {
  return (
    <div className={tableCSS.wrapper}>
      <div className={tableCSS.content}>
        <h2 className={tableCSS.heading}>All Resumes</h2>
        <nav className={tableCSS.options}>
          <ul>
            <li>
              <a href="">Resumes</a>
            </li>
            <li>
              <a href="">Cover Letters</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
