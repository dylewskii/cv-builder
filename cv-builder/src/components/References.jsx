import Entry from "./Entry";
import { useState } from "react";
import entryCSS from "../styles/Entry.module.css";

export default function References({
  references,
  setReferences,
  draftReferences,
  handleInputChange,
  handleSubmit,
  hideReferences,
  setHideReferences,
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
        <label>Available upon request</label>
        <input
          type="checkbox"
          name="hide"
          checked={hideReferences}
          value={hideReferences || false}
          onChange={() => setHideReferences(!hideReferences)}
        />
      </div>

      <label>Referent&#39;s Full Name</label>
      <input
        disabled={hideReferences}
        type="text"
        name="referent"
        value={draftReferences.referent || ""}
        onChange={handleInputChange}
      />

      <label>Company</label>
      <input
        disabled={hideReferences}
        type="text"
        name="company"
        value={draftReferences.company || ""}
        onChange={handleInputChange}
      />

      <label>Phone</label>
      <input
        disabled={hideReferences}
        type="tel"
        name="phone"
        value={draftReferences.phone || ""}
        onChange={handleInputChange}
      />

      <label>Email</label>
      <input
        disabled={hideReferences}
        type="email"
        name="email"
        value={draftReferences.email || ""}
        onChange={handleInputChange}
      />
      <button disabled={hideReferences} onClick={handleSubmit}>
        Add Reference
      </button>
    </>
  );
}
