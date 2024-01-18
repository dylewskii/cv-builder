import { useState } from "react";
import createCSS from "../styles/CreateCV.module.css";

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
  const [history, setHistory] = useState({
    jobTitle: "",
    employer: "",
    dateRange: "",
    city: "",
    description: "",
  });
  // Education State
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    dateRange: "",
    city: "",
    description: "",
  });
  // References State
  const [references, setReferences] = useState({
    hide: false,
    referent: "",
    company: "",
    phone: "",
    email: "",
  });

  return (
    <div className={createCSS.createContainer}>
      <section className={createCSS.previewPanel}>
        <div className={createCSS.previewDetails}>
          <h4>
            {details.fName} {details.lName}
          </h4>
          <p>{details.email}</p>
          <p>{details.tel}</p>
          <p>{details.city}</p>
          <p>{details.country}</p>
        </div>
        <div className={createCSS.previewSummary}>
          <h4>Profile</h4>
          <p>{summary}</p>
        </div>
        <div className={createCSS.previewHistory}>
          <h4>Employment History</h4>
          <div className={createCSS.employerBox}>
            <h5>
              {history.jobTitle} {history.employer} {history.dateRange}
            </h5>
            <ul>
              <li>Task 1</li>
              <li>Task 2</li>
              <li>Task 3</li>
            </ul>
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

          <EmploymentHistory history={history} setHistory={setHistory} />

          <Education education={education} setEducation={setEducation} />

          <References references={references} setReferences={setReferences} />
        </form>
      </section>
    </div>
  );
}

function PersonalDetails({ details, setDetails }) {
  return (
    <>
      <h3>Personal Details</h3>

      <label>First Name</label>
      <input
        type="text"
        value={details.fName}
        onChange={(e) => setDetails({ ...details, fName: e.target.value })}
      />

      <label>Last Name</label>
      <input
        type="text"
        value={details.lName}
        onChange={(e) => setDetails({ ...details, lName: e.target.value })}
      />

      <label>Email</label>
      <input
        type="email"
        value={details.email}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />

      <label>Phone</label>
      <input
        type="tel"
        value={details.tel}
        onChange={(e) => setDetails({ ...details, tel: e.target.value })}
      />

      <label>City</label>
      <input
        type="text"
        value={details.city}
        onChange={(e) => setDetails({ ...details, city: e.target.value })}
      />

      <label>Country</label>
      <input
        type="text"
        value={details.country}
        onChange={(e) => setDetails({ ...details, country: e.target.value })}
      />
    </>
  );
}

function ProfessionalSummary({ summary, setSummary }) {
  return (
    <>
      <h3>Professional Summary</h3>
      <p>
        Write a short & captivating introduction. Mention your role, experience
        & most importantly - your biggest achievements, best qualities and
        skills.
      </p>
      <textarea
        name=""
        id=""
        cols="30"
        rows="4"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </>
  );
}

function EmploymentHistory({ history, setHistory }) {
  return (
    <>
      <h3>Employment History</h3>
      <p>Show your relevant experience.</p>

      <label>Job Title</label>
      <input
        type="text"
        value={history.jobTitle}
        onChange={(e) => setHistory({ ...history, jobTitle: e.target.value })}
      />

      <label>Employer</label>
      <input
        type="text"
        value={history.employer}
        onChange={(e) => setHistory({ ...history, employer: e.target.value })}
      />

      <label>Start & End Date</label>
      <input
        type="text"
        placeholder="MM/YY - MM/YY"
        value={history.dateRange}
        onChange={(e) => setHistory({ ...history, dateRange: e.target.value })}
      />

      <label>City</label>
      <input
        type="text"
        value={history.city}
        onChange={(e) => setHistory({ ...history, city: e.target.value })}
      />

      <label>Description</label>
      <input
        type="text"
        value={history.description}
        onChange={(e) =>
          setHistory({ ...history, description: e.target.value })
        }
      />
    </>
  );
}

function Education({ education, setEducation }) {
  return (
    <>
      <h3>Education</h3>
      <p>
        Sum up the value that your learnings and background will bring to the
        job.
      </p>

      <label>School</label>
      <input
        type="text"
        value={education.school}
        onChange={(e) => setEducation({ ...education, school: e.target.value })}
      />

      <label>Degree</label>
      <input
        type="text"
        value={education.degree}
        onChange={(e) => setEducation({ ...education, degree: e.target.value })}
      />

      <label>Start & End Date</label>
      <input
        type="text"
        placeholder="MM/YY - MM/YY"
        value={education.dateRange}
        onChange={(e) =>
          setEducation({ ...education, dateRange: e.target.value })
        }
      />

      <label>City</label>
      <input
        type="text"
        value={education.city}
        onChange={(e) => setEducation({ ...education, city: e.target.value })}
      />

      <label>Description</label>
      <input
        type="text"
        value={education.description}
        onChange={(e) =>
          setEducation({ ...education, description: e.target.value })
        }
      />
    </>
  );
}

function References({ references, setReferences }) {
  return (
    <>
      <h3>References</h3>

      <div className={createCSS.refs}>
        <label>Available upon request only.</label>
        <input
          type="radio"
          value={references.hide}
          onChange={(e) =>
            setReferences({ ...references, hide: e.target.value })
          }
        />
      </div>

      <label>Referent&#39;s Full Name</label>
      <input
        type="text"
        value={references.referent}
        onChange={(e) =>
          setReferences({ ...references, referent: e.target.value })
        }
      />

      <label>Company</label>
      <input
        type="text"
        value={references.company}
        onChange={(e) =>
          setReferences({ ...references, company: e.target.value })
        }
      />

      <label>Phone</label>
      <input
        type="tel"
        value={references.phone}
        onChange={(e) =>
          setReferences({ ...references, phone: e.target.value })
        }
      />

      <label>Email</label>
      <input
        type="email"
        value={references.email}
        onChange={(e) =>
          setReferences({ ...references, email: e.target.value })
        }
      />
    </>
  );
}
