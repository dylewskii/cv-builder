import { useState } from "react";
import eeCSS from "../styles/EmploymentEntries.module.css";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import {
  FaTrash,
  FaEdit,
  FaAngleDown,
  FaAngleUp,
  FaRegSave,
} from "react-icons/fa";

export default function EmploymentEntry({
  employment,
  setEmployment,
  currentEmployment,
  currentEmploymentIndex,
  expandedEntries,
  handleExpandToggle,
  entriesBeingEdited,
  handleEditClick,
}) {
  const [editDraft, setEditDraft] = useState({
    id: crypto.randomUUID(),
    jobTitle: "",
    employer: "",
    dateRange: "",
    city: "",
    description: "",
  });

  if (employment === null || employment.length === 0) return null;

  // Deletes an employment entry from the employment state
  function handleEmploymentDelete() {
    const updatedEmployment = [...employment];
    updatedEmployment.splice(currentEmploymentIndex, 1);
    setEmployment(updatedEmployment);
  }

  // Adds any changes made to editDraft state
  function handleEmploymentEdit(e, field) {
    const { value } = e.target;
    setEditDraft((prevDraft) => ({
      ...prevDraft,
      [field]: value,
    }));
  }

  // Saves any changes (stored in editDraft) to the employment state
  function handleSaveChanges(index) {
    setEmployment((prevEmployment) =>
      prevEmployment.map((emp, i) =>
        i === index
          ? {
              id: crypto.randomUUID(),
              jobTitle: editDraft.jobTitle,
              employer: editDraft.employer,
              dateRange: editDraft.dateRange,
              city: editDraft.city,
              description: editDraft.description,
            }
          : emp
      )
    );

    setEditDraft({
      id: crypto.randomUUID(),
      jobTitle: "",
      employer: "",
      dateRange: "",
      city: "",
      description: "",
    });
  }

  const isExpanded = expandedEntries.includes(currentEmploymentIndex);
  const isBeingEdited = entriesBeingEdited.includes(currentEmploymentIndex);

  return (
    <div className={`${eeCSS.employmentEntry} ${isExpanded && eeCSS.expanded}`}>
      <h4>
        {currentEmployment.jobTitle && currentEmployment.jobTitle}
        {currentEmployment.employer && " - " + currentEmployment.employer}
      </h4>
      {isExpanded && (
        <EmploymentForm
          editDraft={editDraft}
          isBeingEdited={isBeingEdited}
          currentEmployment={currentEmployment}
          setEditDraft={setEditDraft}
          handleEmploymentEdit={handleEmploymentEdit}
        />
      )}
      <EmploymentEntryControls
        isExpanded={isExpanded}
        isBeingEdited={isBeingEdited}
        handleEmploymentDelete={handleEmploymentDelete}
        handleExpandToggle={handleExpandToggle}
        handleEditClick={handleEditClick}
        handleSaveChanges={() => handleSaveChanges(currentEmploymentIndex)}
      />
    </div>
  );
}

// Returns a form which allow edits to be made to an existing employment entry
function EmploymentForm({
  editDraft,
  isBeingEdited,
  currentEmployment,
  handleEmploymentEdit,
}) {
  return (
    <div className={eeCSS.formExpanded}>
      {["jobTitle", "employer", "dateRange", "city", "description"].map(
        (field) => (
          <div key={field}>
            <label>{capitalizeFirstLetter(field)}</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name={field}
              placeholder={currentEmployment[field]}
              value={editDraft[field]}
              onChange={(e) => handleEmploymentEdit(e, field)}
            />
          </div>
        )
      )}
    </div>
  );
}

// Returns the employment entry controls (delete, edit, save, collapse)
function EmploymentEntryControls({
  isExpanded,
  isBeingEdited,
  handleEmploymentDelete,
  handleExpandToggle,
  handleEditClick,
  handleSaveChanges,
}) {
  return (
    <div className={eeCSS.employmentEntryControls}>
      <FaTrash
        className={eeCSS.icon}
        onClick={() => handleEmploymentDelete()}
      />
      {isBeingEdited ? (
        <FaRegSave
          className={eeCSS.icon}
          onClick={() => {
            handleSaveChanges();
            handleEditClick();
          }}
        />
      ) : (
        <FaEdit className={eeCSS.icon} onClick={() => handleEditClick()} />
      )}
      {isExpanded ? (
        <FaAngleUp
          className={eeCSS.icon}
          onClick={() => handleExpandToggle()}
        />
      ) : (
        <FaAngleDown
          className={eeCSS.icon}
          onClick={() => handleExpandToggle()}
        />
      )}
    </div>
  );
}
