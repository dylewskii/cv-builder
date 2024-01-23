import { useState } from "react";
import createCSS from "../styles/CreateCV.module.css";
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
      <section className={createCSS.previewPanel}>
        <div className={createCSS.previewDetails}>
          <h4>
            {details.fName} {details.lName}
          </h4>
          <div className={createCSS.detailsLocation}>
            <p className={createCSS.detailsCity}>{details.city}</p>
            <p className={createCSS.detailsCountry}>{details.country}</p>
          </div>
          <div className={createCSS.detailsContact}>
            <p className={createCSS.detailsEmail}>{details.email}</p>
            <p className={createCSS.detailsTel}>{details.tel}</p>
          </div>
        </div>
        <div className={createCSS.previewSummary}>
          <h4>Profile</h4>
          <p>{summary}</p>
        </div>
        <div className={createCSS.previewHistory}>
          <h4>Employment History</h4>
          <div className={createCSS.employerBox}>
            {employment.map((emp, i) => {
              return <EmploymentPreview emp={emp} />;
            })}
          </div>
        </div>
        <div className={createCSS.previewEducation}>
          <h4>Education</h4>
          <div className={createCSS.educationBox}>
            <h5>
              {education.school} {education.degree} {education.dateRange}
            </h5>
            <p>{education.city}</p>
            <p>{education.description}</p>
          </div>
        </div>
        <div className={createCSS.previewReferences}>
          <h4>References</h4>
          {!references.hide ? (
            <p>References available upon request</p>
          ) : (
            <div className={createCSS.referenceBox}>
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
    <>
      <div>
        <FaBullseye />
        <h4>
          {emp.jobTitle} <span>{" - " + emp.employer}</span>
        </h4>
        <p>
          {emp.city} <span>{" - " + emp.dateRange}</span>
        </p>
      </div>
      <div>
        <p>{emp.description}</p>
      </div>
    </>
  );
}
