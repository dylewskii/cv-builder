import { useState } from "react";
import EmploymentEntry from "./EmploymentEntry";

export default function EmploymentHistory({
  draftEmployment,
  employment,
  setEmployment,
  handleInputChange,
  handleSubmit,
}) {
  const [expandedEntries, setExpandedEntries] = useState([]);
  const [editingEntries, setEditingEntries] = useState([]);

  const employmentAdded = employment !== null || employment.length !== 0;
  function handleExpandToggle(index) {
    setExpandedEntries((prev) => {
      // Check if entry already expanded
      const isExpanded = prev.includes(index);
      // If expanded, filter it out, otherwise add it to the state
      return isExpanded
        ? prev.filter((item) => item !== index)
        : [...prev, index];
    });
  }

  function handleEmploymentEdit(index) {
    setEditingEntries((prev) => {
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
            <EmploymentEntry
              key={emp.id}
              employment={employment}
              setEmployment={setEmployment}
              currentEmployment={emp}
              currentEmploymentIndex={i}
              expandedEntries={expandedEntries}
              handleExpandToggle={() => handleExpandToggle(i)}
              editingEntries={editingEntries}
              handleEmploymentEdit={() => handleEmploymentEdit(i)}
              className={expandedEntries.includes(i) && "expanded"}
            />
          ))
        : null}

      <label>Job Title</label>
      <input
        type="text"
        name="jobTitle"
        value={draftEmployment.jobTitle}
        onChange={handleInputChange}
      />

      <label>Employer</label>
      <input
        type="text"
        name="employer"
        value={draftEmployment.employer}
        onChange={handleInputChange}
      />

      <label>Start & End Date</label>
      <input
        type="text"
        name="dateRange"
        placeholder="MM/YY - MM/YY"
        value={draftEmployment.dateRange}
        onChange={handleInputChange}
      />

      <label>City</label>
      <input
        type="text"
        name="city"
        value={draftEmployment.city}
        onChange={handleInputChange}
      />

      <label>Description</label>
      <input
        type="text"
        name="description"
        value={draftEmployment.description}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Save Employment</button>
    </>
  );
}
