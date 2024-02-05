import { useState } from "react";
import Entry from "../Entry";
import entryCSS from "../../styles/Entry.module.css";

export default function EmploymentHistory({
  draftEmployment,
  employment,
  setEmployment,
  handleInputChange,
  handleSubmit,
}) {
  const [expandedEntries, setExpandedEntries] = useState([]);
  const [entriesBeingEdited, setEntriesBeingEdited] = useState([]);
  const employmentAdded = employment !== null || employment.length !== 0;
  const employmentFields = [
    "jobTitle",
    "employer",
    "dateRange",
    "city",
    "description",
  ];

  // Checks if entry is expanded.
  // If expanded, filter it out, otherwise add it to expandedEntries state.
  function handleExpandToggle(index) {
    setExpandedEntries((prev) => {
      const isExpanded = prev.includes(index);
      return isExpanded
        ? prev.filter((item) => item !== index)
        : [...prev, index];
    });
  }

  // Checks if entry is being edited.
  // If being edited, filter it out, otherwise add it to entriesBeingEdited state.
  function handleEditClick(index) {
    setEntriesBeingEdited((prev) => {
      const isBeingEdited = prev.includes(index);
      return isBeingEdited
        ? prev.filter((item) => item !== index)
        : [...prev, index];
    });
  }

  return (
    <>
      <h3>Employment History</h3>
      <p>Show your relevant experience.</p>

      {employmentAdded
        ? employment.map((emp, i) => (
            <Entry
              key={emp.id}
              data={employment}
              setData={setEmployment}
              currentData={emp}
              currentDataIndex={i}
              expandedEntries={expandedEntries}
              handleExpandToggle={() => handleExpandToggle(i)}
              entriesBeingEdited={entriesBeingEdited}
              handleEditClick={() => handleEditClick(i)}
              fieldNames={employmentFields}
              className={entryCSS.entry}
            />
          ))
        : null}

      <label htmlFor="emp-jobTitle">Job Title</label>
      <input
        id="emp-jobTitle"
        type="text"
        name="jobTitle"
        value={draftEmployment.jobTitle || ""}
        onChange={handleInputChange}
      />

      <label htmlFor="emp-employer">Employer</label>
      <input
        id="emp-employer"
        type="text"
        name="employer"
        value={draftEmployment.employer || ""}
        onChange={handleInputChange}
      />

      <label htmlFor="emp-dateRange">Start & End Date</label>
      <input
        id="emp-dateRange"
        type="text"
        name="dateRange"
        placeholder="MM/YY - MM/YY"
        value={draftEmployment.dateRange || ""}
        onChange={handleInputChange}
      />

      <label htmlFor="emp-city">City</label>
      <input
        id="emp-city"
        type="text"
        name="city"
        value={draftEmployment.city || ""}
        onChange={handleInputChange}
      />

      <label htmlFor="emp-description">Description</label>
      <input
        id="emp-description"
        type="text"
        name="description"
        value={draftEmployment.description || ""}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add Employment</button>
    </>
  );
}
