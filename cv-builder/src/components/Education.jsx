import Entry from "./Entry";
import { useState } from "react";
import entryCSS from "../styles/Entry.module.css";

export default function Education({
  education,
  setEducation,
  draftEducation,
  handleInputChange,
  handleSubmit,
}) {
  const [expandedEntries, setExpandedEntries] = useState([]);
  const [entriesBeingEdited, setEntriesBeingEdited] = useState([]);
  const educationAdded = education !== null || education.length !== 0;
  const educationFields = [
    "school",
    "degree",
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
      <h3>Education</h3>
      <p>
        Sum up the value that your learnings and background will bring to the
        job.
      </p>

      {educationAdded
        ? education.map((edu, i) => (
            <Entry
              key={edu.id}
              data={education}
              setData={setEducation}
              currentData={edu}
              currentDataIndex={i}
              expandedEntries={expandedEntries}
              handleExpandToggle={() => handleExpandToggle(i)}
              entriesBeingEdited={entriesBeingEdited}
              handleEditClick={() => handleEditClick(i)}
              fieldNames={educationFields}
              className={entryCSS.entry}
            />
          ))
        : null}

      <label>School</label>
      <input
        type="text"
        name="school"
        value={draftEducation.school || ""}
        onChange={handleInputChange}
      />

      <label>Degree</label>
      <input
        type="text"
        name="degree"
        value={draftEducation.degree || ""}
        onChange={handleInputChange}
      />

      <label>Start & End Date</label>
      <input
        type="text"
        name="dateRange"
        value={draftEducation.dateRange || ""}
        onChange={handleInputChange}
      />

      <label>City</label>
      <input
        type="text"
        name="city"
        value={draftEducation.city || ""}
        onChange={handleInputChange}
      />

      <label>Description</label>
      <input
        type="text"
        name="description"
        value={draftEducation.description || ""}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add Education</button>
    </>
  );
}
