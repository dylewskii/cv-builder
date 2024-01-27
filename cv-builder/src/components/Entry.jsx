import { useState } from "react";
import entryCSS from "../styles/Entry.module.css";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import {
  FaTrash,
  FaEdit,
  FaAngleDown,
  FaAngleUp,
  FaRegSave,
} from "react-icons/fa";

export default function Entry({
  data,
  setData,
  currentData,
  currentDataIndex,
  expandedEntries,
  handleExpandToggle,
  entriesBeingEdited,
  handleEditClick,
  fieldNames,
}) {
  // Initial state object for editDraft,
  // each field specified in fieldNames is a key in the object,
  // with an initial value of an empty string ("").
  const [editDraft, setEditDraft] = useState(
    fieldNames.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
  );

  if (data === null || data.length === 0) return null;

  // Deletes an Entry by splicing it from the data state.
  function handleEntryDelete() {
    const updatedItems = [...data];
    updatedItems.splice(currentDataIndex, 1);
    setData(updatedItems);
  }

  // Saves an Entry edit by adding the entered value to the editDraft state.
  function handleEntryEdit(e, field) {
    const { value } = e.target;
    setEditDraft((prevDraft) => ({
      ...prevDraft,
      [field]: value,
    }));
  }

  // Saves any changes made (stored in editDraft) to an Entry and resets editDraft state.
  function handleSaveChanges(index) {
    setData((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...editDraft, id: crypto.randomUUID() } : item
      )
    );
    setEditDraft(
      fieldNames.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
    );
  }

  // Initializes editDraft state with values from currentData & toggles edit mode.
  function startEditing(index) {
    setEditDraft(currentData);
    handleEditClick(index);
  }

  const isExpanded = expandedEntries.includes(currentDataIndex);
  const isBeingEdited = entriesBeingEdited.includes(currentDataIndex);

  return (
    <div className={`${entryCSS.entry} ${isExpanded && entryCSS.expanded}`}>
      <h4>
        {currentData[fieldNames[0]]} - {currentData[fieldNames[1]]}
      </h4>
      {isExpanded && (
        <EntryForm
          editDraft={editDraft}
          isBeingEdited={isBeingEdited}
          currentData={currentData}
          setEditDraft={setEditDraft}
          handleEntryEdit={handleEntryEdit}
          fieldNames={fieldNames}
        />
      )}
      <EntryControls
        isExpanded={isExpanded}
        isBeingEdited={isBeingEdited}
        handleEntryDelete={handleEntryDelete}
        handleExpandToggle={handleExpandToggle}
        handleEditClick={() => startEditing(currentDataIndex)}
        handleSaveChanges={() => handleSaveChanges(currentDataIndex)}
      />
    </div>
  );
}

// Returns a form which allow edits to be made to an existing Entry.
function EntryForm({
  editDraft,
  isBeingEdited,
  currentData,
  handleEntryEdit,
  fieldNames,
}) {
  function getLabel(field) {
    switch (field) {
      case "jobTitle":
        return "Job Title";
      case "dateRange":
        return "Start & End Date";
      default:
        return capitalizeFirstLetter(field);
    }
  }

  return (
    <div className={entryCSS.formExpanded}>
      {fieldNames.map((field) => (
        <div key={field}>
          <label>{getLabel(field)}</label>
          <input
            disabled={!isBeingEdited}
            type="text"
            name={field}
            placeholder={currentData[field] ? currentData[field] : ""}
            value={editDraft[field]}
            onChange={(e) => handleEntryEdit(e, field)}
          />
        </div>
      ))}
    </div>
  );
}

// Returns the Entry controls (delete, edit, save, toggle expand/collapse)
function EntryControls({
  isExpanded,
  isBeingEdited,
  handleEntryDelete,
  handleExpandToggle,
  handleEditClick,
  handleSaveChanges,
}) {
  return (
    <div className={entryCSS.entryControls}>
      <FaTrash className={entryCSS.icon} onClick={() => handleEntryDelete()} />
      {isBeingEdited ? (
        <FaRegSave
          className={entryCSS.icon}
          onClick={() => {
            handleSaveChanges();
            handleEditClick();
          }}
        />
      ) : (
        <FaEdit className={entryCSS.icon} onClick={() => handleEditClick()} />
      )}
      {isExpanded ? (
        <FaAngleUp
          className={entryCSS.icon}
          onClick={() => handleExpandToggle()}
        />
      ) : (
        <FaAngleDown
          className={entryCSS.icon}
          onClick={() => handleExpandToggle()}
        />
      )}
    </div>
  );
}
