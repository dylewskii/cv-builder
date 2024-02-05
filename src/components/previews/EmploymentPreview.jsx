import { FaBullseye } from "react-icons/fa";
import previewCSS from "../../styles/Preview.module.css";

export default function EmploymentPreview({ emp }) {
  return (
    <div className={previewCSS.employmentBox}>
      <div className={previewCSS.employmentHeader}>
        <div className={previewCSS.employmentTitle}>
          <FaBullseye className={previewCSS.icon} />
          <h5>
            {emp.jobTitle} <span>{" - " + emp.employer}</span>
          </h5>
        </div>
        <p>
          {emp.city} <span>{"(" + emp.dateRange + ")"}</span>
        </p>
      </div>
      <div className={previewCSS.employmentBody}>
        <p>{emp.description}</p>
      </div>
    </div>
  );
}
