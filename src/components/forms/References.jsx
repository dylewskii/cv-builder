import { useState } from "react";
import Entry from "../Entry";
import entryCSS from "../../styles/Entry.module.css";
import createCSS from "../../styles/CreateCV.module.css";

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

      <div className={createCSS.hideRefs}>
        <label htmlFor="ref-hide">Available upon request</label>
        <input
          id="ref-hide"
          className={createCSS.checkbox}
          type="checkbox"
          name="hide"
          checked={hideReferences}
          value={hideReferences || false}
          onChange={() => setHideReferences(!hideReferences)}
        />
      </div>

      <label htmlFor="ref-referent">Referent&#39;s Full Name</label>
      <input
        id="ref-referent"
        disabled={hideReferences}
        type="text"
        name="referent"
        value={draftReferences.referent || ""}
        onChange={handleInputChange}
      />

      <label htmlFor="ref-company">Company</label>
      <input
        id="ref-company"
        disabled={hideReferences}
        type="text"
        name="company"
        value={draftReferences.company || ""}
        onChange={handleInputChange}
      />

      <label htmlFor="ref-phone">Phone</label>
      <input
        id="ref-phone"
        disabled={hideReferences}
        type="tel"
        name="phone"
        value={draftReferences.phone || ""}
        onChange={handleInputChange}
      />

      <label htmlFor="ref-email">Email</label>
      <input
        id="ref-email"
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
