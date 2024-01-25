import Entry from "./Entry";
import { useState } from "react";
import entryCSS from "../styles/Entry.module.css";

export default function References({
  references,
  setReferences,
  draftReferences,
  handleInputChange,
  handleSubmit,
}) {
  const [expandedEntries, setExpandedEntries] = useState([]);
  const [entriesBeingEdited, setEntriesBeingEdited] = useState([]);
  const referencesAdded = references !== null || references.length !== 0;
  const referencesFields = ["hide", "referent", "company", "phone", "email"];

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
      <h3>References</h3>

      {referencesAdded
        ? references.map((ref, i) => (
            <Entry
              key={ref.id}
              data={references}
              setData={setReferences}
              currentData={ref}
              currentDataIndex={i}
              expandedEntries={expandedEntries}
              handleExpandToggle={() => handleExpandToggle(i)}
              entriesBeingEdited={entriesBeingEdited}
              handleEditClick={() => handleEditClick(i)}
              fieldNames={referencesFields}
              className={entryCSS.entry}
            />
          ))
        : null}

      <div>
        <label>Available upon request only</label>
        <input
          type="radio"
          name="hide"
          value={draftReferences.hide || ""}
          onChange={handleInputChange}
        />
      </div>

      <label>Referent&#39;s Full Name</label>
      <input
        type="text"
        name="referent"
        value={draftReferences.referent || ""}
        onChange={handleInputChange}
      />

      <label>Company</label>
      <input
        type="text"
        name="company"
        value={draftReferences.company || ""}
        onChange={handleInputChange}
      />

      <label>Phone</label>
      <input
        type="tel"
        name="phone"
        value={draftReferences.phone || ""}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={draftReferences.email || ""}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add Reference</button>
    </>
  );
}
