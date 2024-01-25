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

// Entry Component
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

  function handleItemDelete() {
    const updatedItems = [...data];
    updatedItems.splice(currentDataIndex, 1);
    setData(updatedItems);
  }

  function handleItemEdit(e, field) {
    const { value } = e.target;
    setEditDraft((prevDraft) => ({
      ...prevDraft,
      [field]: value,
    }));
  }

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
          handleItemEdit={handleItemEdit}
          fieldNames={fieldNames}
        />
      )}
      <EntryControls
        isExpanded={isExpanded}
        isBeingEdited={isBeingEdited}
        handleItemDelete={handleItemDelete}
        handleExpandToggle={handleExpandToggle}
        handleEditClick={handleEditClick}
        handleSaveChanges={() => handleSaveChanges(currentDataIndex)}
      />
    </div>
  );
}

function EntryForm({
  editDraft,
  isBeingEdited,
  currentData,
  handleItemEdit,
  fieldNames,
}) {
  return (
    <div className={entryCSS.formExpanded}>
      {fieldNames.map((field) => (
        <div key={field}>
          <label>{capitalizeFirstLetter(field)}</label>
          <input
            disabled={!isBeingEdited}
            type="text"
            name={field}
            placeholder={currentData[field] ? currentData[field] : ""}
            value={editDraft[field]}
            onChange={(e) => handleItemEdit(e, field)}
          />
        </div>
      ))}
    </div>
  );
}

// Entry Controls Component
function EntryControls({
  isExpanded,
  isBeingEdited,
  handleItemDelete,
  handleExpandToggle,
  handleEditClick,
  handleSaveChanges,
}) {
  return (
    <div className={entryCSS.entryControls}>
      <FaTrash className={entryCSS.icon} onClick={() => handleItemDelete()} />
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
