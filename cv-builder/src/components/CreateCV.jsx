import { useState, useRef, useContext } from "react";
import DataContext from "../context/DataContext";
// PDF
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
// CSS
import createCSS from "../styles/CreateCV.module.css";
import previewCSS from "../styles/Preview.module.css";
// Forms
import PersonalDetails from "./Forms/PersonalDetails";
import ProfessionalSummary from "./Forms/ProfessionalSummary";
import EmploymentHistory from "./Forms/EmploymentHistory";
import Education from "./Forms/Education";
import References from "./Forms/References";
// Previews
import Preview from "./Previews/Preview";
// Icons
import { FaCheck } from "react-icons/fa";

export default function CreateCV() {
  const { allDocuments, setAllDocuments } = useContext(DataContext);

  // Determines which elements should be downloaded to PDF
  const printRef = useRef();

  // Has the CV been saved flag
  const [isSaved, setIsSaved] = useState(false);

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

  const resetState = () => {
    setDetails([]);
    setSummary("");
    setEmployment([]);
    setEducation([]);
    setReferences([]);
  };

  const resetDraftState = () => {
    setDraftDetails({
      fName: "",
      lName: "",
      email: "",
      tel: "",
      city: "",
      country: "",
    });

    setDraftSummary("");

    setDraftEmployment({
      id: crypto.randomUUID(),
      jobTitle: "",
      employer: "",
      dateRange: "",
      city: "",
      description: "",
    });

    setDraftEducation({
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      dateRange: "",
      city: "",
      description: "",
    });

    setDraftReferences({
      id: crypto.randomUUID(),
      referent: "",
      company: "",
      phone: "",
      email: "",
    });
  };

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
          jobTitle: "",
          employer: "",
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

  // Returns compiled CV object
  const compileCV = () => {
    const cv = {
      id: crypto.randomUUID(),
      personalDetails: { ...details },
      professionalSummary: summary,
      education: [...education],
      employment: [...employment],
      references: [...references],
      hideReferences: hideReferences,
    };

    return cv;
  };

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

  const handleCvSave = async () => {
    const newCv = compileCV();
    let createdDate = new Date();
    createdDate = createdDate.toLocaleDateString();

    // Capture snapshot
    const element = printRef.current;
    const canvas = await html2canvas(element, { scale: 1 });
    let snapshot = canvas.toDataURL("image/png");

    // Add snapshot & date to CV object
    const cvWithSnapshot = { ...newCv, snapshot, createdDate };

    // Update allDocuments state with new CV (including the snapshot)
    setAllDocuments((prev) => [...prev, cvWithSnapshot]);
    setIsSaved(true);
  };

  // PREVIEW
  return (
    <>
      <div className={createCSS.controls}>
        <button onClick={handleDownloadPdf}>Download PDF</button>
        {isSaved ? (
          <button onClick={handleCvSave}>
            Saved <FaCheck color="green" />
          </button>
        ) : (
          <button onClick={handleCvSave}>Save CV</button>
        )}
      </div>
      <div className={createCSS.createContainer}>
        <Preview
          innerRef={printRef}
          className={previewCSS.previewPanel}
          details={details}
          summary={summary}
          employment={employment}
          education={education}
          references={references}
          hideReferences={hideReferences}
        />
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
