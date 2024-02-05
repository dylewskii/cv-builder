import previewCSS from "../../styles/Preview.module.css";
import EmploymentPreview from "./EmploymentPreview";
import EducationPreview from "./EducationPreview";
import ReferencesPreview from "./ReferencesPreview";

export default function Preview({
  details,
  summary,
  employment,
  education,
  references,
  hideReferences,
  innerRef,
}) {
  return (
    <section ref={innerRef} className={previewCSS.previewPanel}>
      {/* Preview - Personal Details */}
      <div className={previewCSS.previewDetails}>
        <h4>
          {details.fName} {details.lName}
        </h4>
        <div className={previewCSS.detailsLocation}>
          <p className={previewCSS.detailsCity}>{details.city}</p>
          <p className={previewCSS.detailsCountry}>{details.country}</p>
        </div>
        <div className={previewCSS.detailsContact}>
          <p className={previewCSS.detailsEmail}>{details.email}</p>
          <p className={previewCSS.detailsTel}>{details.tel}</p>
        </div>
      </div>

      {/* Preview - Professional Summary */}
      <div className={previewCSS.previewSummary}>
        <h4>Profile</h4>
        <p>{summary}</p>
      </div>

      {/* Preview - Employment History */}
      <div className={previewCSS.previewEmployment}>
        <h4>Employment History</h4>
        <div className={previewCSS.employmentBox}>
          {employment.map((emp) => {
            return <EmploymentPreview key={crypto.randomUUID()} emp={emp} />;
          })}
        </div>
      </div>

      {/* Preview - Education */}
      <div className={previewCSS.previewEducation}>
        <h4>Education</h4>
        {education.map((edu) => {
          return <EducationPreview key={crypto.randomUUID()} edu={edu} />;
        })}
      </div>

      {/* Preview - References */}
      <div className={previewCSS.previewReferences}>
        <h4>References</h4>
        {hideReferences ? (
          <p className={previewCSS.hideReferences}>Available upon request</p>
        ) : (
          references.map((refe) => {
            return <ReferencesPreview key={crypto.randomUUID} refe={refe} />;
          })
        )}
      </div>
    </section>
  );
}
