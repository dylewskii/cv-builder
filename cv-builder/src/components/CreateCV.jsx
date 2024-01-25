import { useState } from "react";
import createCSS from "../styles/CreateCV.module.css";
import previewCSS from "../styles/Preview.module.css";
import PersonalDetails from "./PersonalDetails";
import ProfessionalSummary from "./ProfessionalSummary";
import EmploymentHistory from "./EmploymentHistory";
import Education from "./Education";
import References from "./References";
import { FaBullseye } from "react-icons/fa";

export default function CreateCV() {
  // Personal Details State
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    tel: "",
    city: "",
    country: "",
  });

  // Professional Summary State
  const [summary, setSummary] = useState("");

  // Employment History State
  const [employment, setEmployment] = useState([]);
  const [draftEmployment, setDraftEmployment] = useState({
    id: crypto.randomUUID(),
    jobTitle: "",
    employer: "",
    dateRange: "",
    city: "",
    description: "",
  });

  // Education State
  const [education, setEducation] = useState([]);
  const [draftEducation, setDraftEducation] = useState({
    id: crypto.randomUUID(),
    school: "",
    degree: "",
    dateRange: "",
    city: "",
    description: "",
  });

  // References State
  const [references, setReferences] = useState([]);
  const [draftReferences, setDraftReferences] = useState({
    id: crypto.randomUUID(),
    hide: false,
    referent: "",
    company: "",
    phone: "",
    email: "",
  });

  // Form Handler Functions
  const handleInputChange = (e, draftSetter) => {
    const { name, value } = e.target;
    draftSetter((prevDraft) => ({
      ...prevDraft,
      [name]: value,
    }));
  };

  const handleSubmit = (e, dataSetter, draft, entryType) => {
    e.preventDefault();

    dataSetter((prevEmployment) => [...prevEmployment, draft]);

    switch (entryType) {
      case "employment":
        setDraftEmployment({
          id: crypto.randomUUID(),
          school: "",
          degree: "",
          dateRange: "",
          city: "",
          description: "",
        });
        break;
      case "education":
        setDraftEducation({
          id: crypto.randomUUID(),
          school: "",
          degree: "",
          dateRange: "",
          city: "",
          description: "",
        });
        break;
      case "references":
        setDraftReferences({
          id: crypto.randomUUID(),
          hide: false,
          referent: "",
          company: "",
          phone: "",
          email: "",
        });
        break;
      default:
        console.log("Invalid Entry Type");
    }
  };

  return (
    <div className={createCSS.createContainer}>
      <section className={previewCSS.previewPanel}>
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
        <div className={previewCSS.previewSummary}>
          <h4>Profile</h4>
          <p>{summary}</p>
        </div>
        <div className={previewCSS.previewHistory}>
          <h4>Employment History</h4>
          <div className={previewCSS.employerBox}>
            {employment.map((emp, i) => {
              return <EmploymentPreview key={crypto.randomUUID()} emp={emp} />;
            })}
          </div>
        </div>
        <div className={previewCSS.previewEducation}>
          <h4>Education</h4>
          <div className={previewCSS.educationBox}>
            <h5>
              {education.school} {education.degree} {education.dateRange}
            </h5>
            <p>{education.city}</p>
            <p>{education.description}</p>
          </div>
        </div>
        <div className={previewCSS.previewReferences}>
          <h4>References</h4>
          {!references.hide ? (
            <p>References available upon request</p>
          ) : (
            <div className={previewCSS.referenceBox}>
              <h5>
                {references.referent} {references.company}
              </h5>
              <p>{references.email}</p>
              <p>{references.phone}</p>
            </div>
          )}
        </div>
      </section>
      <section className={createCSS.editPanel}>
        <form>
          <PersonalDetails details={details} setDetails={setDetails} />

          <ProfessionalSummary summary={summary} setSummary={setSummary} />

          <EmploymentHistory
            draftEmployment={draftEmployment}
            setDraftEmployment={setDraftEmployment}
            employment={employment}
            setEmployment={setEmployment}
            handleInputChange={(e) => handleInputChange(e, setDraftEmployment)}
            handleSubmit={(e) =>
              handleSubmit(e, setEmployment, draftEmployment, "employment")
            }
          />

          <Education
            draftEducation={draftEducation}
            setDraftEducation={setDraftEducation}
            education={education}
            setEducation={setEducation}
            handleInputChange={(e) => handleInputChange(e, setDraftEducation)}
            handleSubmit={(e) =>
              handleSubmit(e, setEducation, draftEducation, "education")
            }
          />

          <References
            draftReferences={draftReferences}
            setDraftReferences={setDraftReferences}
            references={references}
            setReferences={setReferences}
            handleInputChange={(e) => handleInputChange(e, setDraftReferences)}
            handleSubmit={(e) =>
              handleSubmit(e, setReferences, draftReferences, "references")
            }
          />
        </form>
      </section>
    </div>
  );
}

function EmploymentPreview({ emp }) {
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
