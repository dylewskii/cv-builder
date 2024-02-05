import { FaBullseye } from "react-icons/fa";
import previewCSS from "../../styles/Preview.module.css";

export default function EducationPreview({ edu }) {
  return (
    <div className={previewCSS.educationBox}>
      <div className={previewCSS.educationHeader}>
        <div className={previewCSS.educationTitle}>
          <FaBullseye className={previewCSS.icon} />
          <h5>
            {edu.degree} <span>{" at " + edu.school}</span>
          </h5>
        </div>
        <p>
          {edu.city} <span>{"(" + edu.dateRange + ")"}</span>
        </p>
      </div>
      <div className={previewCSS.educationBody}>
        <p>{edu.description}</p>
      </div>
    </div>
  );
}
