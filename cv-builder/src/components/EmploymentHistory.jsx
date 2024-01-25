import { useState } from "react";
import Entry from "./Entry";
import entryCSS from "../styles/Entry.module.css";

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

      <label>Job Title</label>
      <input
        type="text"
        name="jobTitle"
        value={draftEmployment.jobTitle || ""}
        onChange={handleInputChange}
      />

      <label>Employer</label>
      <input
        type="text"
        name="employer"
        value={draftEmployment.employer || ""}
        onChange={handleInputChange}
      />

      <label>Start & End Date</label>
      <input
        type="text"
        name="dateRange"
        placeholder="MM/YY - MM/YY"
        value={draftEmployment.dateRange || ""}
        onChange={handleInputChange}
      />

      <label>City</label>
      <input
        type="text"
        name="city"
        value={draftEmployment.city || ""}
        onChange={handleInputChange}
      />

      <label>Description</label>
      <input
        type="text"
        name="description"
        value={draftEmployment.description || ""}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add Employment</button>
    </>
  );
}
