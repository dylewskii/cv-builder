import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import createCSS from "../styles/CreateCV.module.css";
import previewCSS from "../styles/Preview.module.css";
import PersonalDetails from "./Forms/PersonalDetails";
import ProfessionalSummary from "./Forms/ProfessionalSummary";
import EmploymentHistory from "./Forms/EmploymentHistory";
import Education from "./Forms/Education";
import References from "./Forms/References";
//Previews
import EmploymentPreview from "./Previews/EmploymentPreview";
import EducationPreview from "./Previews/EducationPreview";
import ReferencesPreview from "./Previews/ReferencesPreview";

export default function CreateCV() {
  const printRef = useRef();

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
    referent: "",
    company: "",
    phone: "",
    email: "",
  });
  const [hideReferences, setHideReferences] = useState(true);

  // PDF Download Handler
  const handleDownloadPdf = async () => {
    const element = printRef.current;

    const scale = 5; // increased scale to improve quality
    const canvas = await html2canvas(element, {
      scale: scale,
      useCORS: true, // helps images load correctly from external sources
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4"); // orientation/unit/format arguments
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("cv.pdf");
  };

  const handleCvSave = () => {};

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

    // check if draft values are empty
    let draftValuesArray = Object.values(draft).splice(1);
    const draftIsEmpty = draftValuesArray.every(
      (val) => val === null || val === ""
    );

    // if empty, prevent empty form submit
    if (draftIsEmpty) {
      return;
    }

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

  // PREVIEW
  return (
    <>
      <div className={createCSS.controls}>
        <button onClick={handleDownloadPdf}>Download PDF</button>
        <button onClick={handleCvSave}>Save CV</button>
      </div>
      <div className={createCSS.createContainer}>
        <section ref={printRef} className={previewCSS.previewPanel}>
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
                return (
                  <EmploymentPreview key={crypto.randomUUID()} emp={emp} />
                );
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
              <p className={previewCSS.hideReferences}>
                Available upon request
              </p>
            ) : (
              references.map((refe) => {
                return (
                  <ReferencesPreview key={crypto.randomUUID} refe={refe} />
                );
              })
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
              handleInputChange={(e) =>
                handleInputChange(e, setDraftEmployment)
              }
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
              handleInputChange={(e) =>
                handleInputChange(e, setDraftReferences)
              }
              handleSubmit={(e) =>
                handleSubmit(e, setReferences, draftReferences, "references")
              }
              hideReferences={hideReferences}
              setHideReferences={setHideReferences}
            />
          </form>
        </section>
      </div>
    </>
  );
}
