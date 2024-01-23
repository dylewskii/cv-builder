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
  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      dateRange: "",
      city: "",
      description: "",
    },
  ]);
  // References State
  const [references, setReferences] = useState([
    {
      id: crypto.randomUUID(),
      hide: false,
      referent: "",
      company: "",
      phone: "",
      email: "",
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDraftEmployment((prevDraft) => ({
      ...prevDraft,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployment((prevEmployment) => [...prevEmployment, draftEmployment]);
    setDraftEmployment({
      id: crypto.randomUUID(),
      jobTitle: "",
      employer: "",
      dateRange: "",
      city: "",
      description: "",
    });
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
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />

          <Education education={education} setEducation={setEducation} />

          <References references={references} setReferences={setReferences} />
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
