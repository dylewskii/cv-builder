import { useState } from "react";
import eeCSS from "../styles/EmploymentEntries.module.css";
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
  editingEntries,
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

  if (employment === null || employment.length === 0) return;

  function handleEmploymentDelete() {
    const updatedEmployment = [...employment];
    updatedEmployment.splice(currentEmploymentIndex, 1);
    setEmployment(updatedEmployment);
  }

  function handleEmploymentEdit(e) {
    const { name, value } = e.target;
    setEditDraft((prevDraft) => ({
      ...prevDraft,
      [name]: value,
    }));
  }

  function handleEmploymentSaveChanges(e) {
    e.preventDefault();

    setEmployment((prevEmployment) =>
      prevEmployment.map((emp, i) =>
        i === currentEmploymentIndex
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
  const isBeingEdited = editingEntries.includes(currentEmploymentIndex);

  if (isExpanded) {
    return (
      <div className={`${eeCSS.employmentEntry} ${eeCSS.expanded}`}>
        <h4>
          {currentEmployment.jobTitle && currentEmployment.jobTitle}
          {currentEmployment.employer && " - " + currentEmployment.employer}
        </h4>
        <div className={eeCSS.formExpanded}>
          <div>
            <label>Job Title</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name="jobTitle"
              placeholder={currentEmployment.jobTitle}
              value={editDraft.jobTitle}
              onChange={handleEmploymentEdit}
              // defaultValue={currentEmployment.jobTitle}
            />
          </div>

          <div>
            <label>Employer</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name="employer"
              placeholder={currentEmployment.employer}
              value={editDraft.employer}
              onChange={handleEmploymentEdit}
              // defaultValue={currentEmployment.employer}
            />
          </div>

          <div>
            <label>Start & End Date</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name="dateRange"
              placeholder={
                currentEmployment.placeholder
                  ? currentEmployment.placeholder
                  : "MM/YY - MM/YY"
              }
              value={editDraft.placeholder}
              onChange={handleEmploymentEdit}
              // defaultValue={currentEmployment.placeholder}
            />
          </div>

          <div>
            <label>City</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name="city"
              placeholder={currentEmployment.city}
              value={editDraft.city}
              onChange={handleEmploymentEdit}
              // defaultValue={currentEmployment.city}
            />
          </div>

          <div>
            <label>Description</label>
            <input
              disabled={!isBeingEdited}
              type="text"
              name="description"
              placeholder={currentEmployment.description}
              value={editDraft.description}
              onChange={handleEmploymentEdit}
              // defaultValue={currentEmployment.description}
            />
          </div>
        </div>
        <EmploymentEntryControls
          isExpanded={isExpanded}
          isBeingEdited={isBeingEdited}
          handleEmploymentDelete={handleEmploymentDelete}
          handleExpandToggle={handleExpandToggle}
          handleEditClick={handleEditClick}
          handleEmploymentSaveChanges={handleEmploymentSaveChanges}
        />
      </div>
    );
  } else {
    return (
      <div className={eeCSS.employmentEntry}>
        <h4>
          {currentEmployment.jobTitle && currentEmployment.jobTitle}
          {currentEmployment.employer && " - " + currentEmployment.employer}
        </h4>
        <EmploymentEntryControls
          isExpanded={isExpanded}
          isBeingEdited={isBeingEdited}
          handleEmploymentDelete={handleEmploymentDelete}
          handleExpandToggle={handleExpandToggle}
          handleEditClick={handleEditClick}
          handleEmploymentSaveChanges={handleEmploymentSaveChanges}
        />
      </div>
    );
  }
}

function EmploymentEntryControls({
  isExpanded,
  isBeingEdited,
  handleEmploymentDelete,
  handleExpandToggle,
  handleEditClick,
  handleEmploymentSaveChanges,
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
          onClick={(e) => handleEmploymentSaveChanges(e)}
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
